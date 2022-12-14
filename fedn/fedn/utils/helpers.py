from abc import ABC, abstractmethod


class HelperBase(ABC):
    """ Abstract class defining helpers. """

    def __init__(self):
        """ """

    @abstractmethod
    def increment_average(self, model, model_next, n):
        """ Compute one increment of incremental averaging.
            n: the iteration index 1...N  in the sequence.
        """
        pass

    @abstractmethod
    def save_model(self, model, path):
        """
            Serialize the model to file on disk on path.
            The serialized model must be a single binary object.
        """
        pass

    @abstractmethod
    def load_model(self, path):
        """ Load the model save with save_model from disk on path.  """
        pass

    @abstractmethod
    def serialize_model_to_BytesIO(self, model):
        """ Serialize a model to a BytesIO buffered object. """
        pass

    @abstractmethod
    def load_model_from_BytesIO(self, model_bytesio):
        """ Load a model from a BytesIO buffered object. """
        pass

    @abstractmethod
    def get_tmp_path(self):
        """ Return a temporary output path compatible with save_model, load_model. """
        pass


def get_helper(helper_type):
    """ Return an instance of the helper class.

    :param helper_type (str): The helper type ('keras','pytorch')
    :return:
    """
    if helper_type == 'numpyarray':
        # TODO: refactor cyclical import to avoid this ugly line
        """ noqa """; from fedn.utils.numpyarrayhelper import NumpyArrayHelper  # autopep8: off # noqa: E702
        return NumpyArrayHelper()
    elif helper_type == 'keras':
        """ noqa """; from fedn.utils.kerashelper import KerasHelper  # autopep8: off # noqa: E702
        return KerasHelper()
    elif helper_type == 'pytorch':
        """ noqa """; from fedn.utils.pytorchhelper import PytorchHelper  # autopep8: off # noqa: E702
        return PytorchHelper()
    else:
        return None
