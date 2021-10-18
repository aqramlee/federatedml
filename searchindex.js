Search.setIndex({docnames:["architecture","deployment","faq","fedn","fedn.aggregators","fedn.clients","fedn.clients.client","fedn.clients.combiner","fedn.clients.reducer","fedn.clients.reducer.statestore","fedn.common","fedn.common.control","fedn.common.net","fedn.common.net.grpc","fedn.common.net.web","fedn.common.security","fedn.common.storage","fedn.common.storage.db","fedn.common.storage.models","fedn.common.storage.s3","fedn.common.tracer","fedn.utils","index","modules","readme","releasenotes","sdk","tutorial"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["architecture.rst","deployment.rst","faq.rst","fedn.rst","fedn.aggregators.rst","fedn.clients.rst","fedn.clients.client.rst","fedn.clients.combiner.rst","fedn.clients.reducer.rst","fedn.clients.reducer.statestore.rst","fedn.common.rst","fedn.common.control.rst","fedn.common.net.rst","fedn.common.net.grpc.rst","fedn.common.net.web.rst","fedn.common.security.rst","fedn.common.storage.rst","fedn.common.storage.db.rst","fedn.common.storage.models.rst","fedn.common.storage.s3.rst","fedn.common.tracer.rst","fedn.utils.rst","index.rst","modules.rst","readme.rst","releasenotes.rst","sdk.rst","tutorial.rst"],objects:{"":{fedn:[3,0,0,"-"]},"fedn.aggregators":{aggregator:[4,0,0,"-"]},"fedn.aggregators.aggregator":{AggregatorBase:[4,1,1,""]},"fedn.aggregators.aggregator.AggregatorBase":{combine_models:[4,2,1,""],on_model_update:[4,2,1,""],on_model_validation:[4,2,1,""]},"fedn.clients":{client:[6,0,0,"-"],combiner:[7,0,0,"-"],reducer:[8,0,0,"-"]},"fedn.clients.client":{state:[6,0,0,"-"]},"fedn.clients.client.state":{ClientState:[6,1,1,""],ClientStateToString:[6,4,1,""]},"fedn.clients.client.state.ClientState":{idle:[6,3,1,""],training:[6,3,1,""],validating:[6,3,1,""]},"fedn.clients.reducer":{config:[8,0,0,"-"],plots:[8,0,0,"-"],state:[8,0,0,"-"],statestore:[9,0,0,"-"]},"fedn.clients.reducer.config":{Config:[8,1,1,""],ReducerConfig:[8,1,1,""]},"fedn.clients.reducer.config.ReducerConfig":{compute_bundle_dir:[8,3,1,""],initial_model:[8,3,1,""],models_dir:[8,3,1,""],storage_backend:[8,3,1,""]},"fedn.clients.reducer.plots":{Plot:[8,1,1,""]},"fedn.clients.reducer.plots.Plot":{create_box_plot:[8,2,1,""],create_client_plot:[8,2,1,""],create_client_training_distribution:[8,2,1,""],create_combiner_plot:[8,2,1,""],create_cpu_plot:[8,2,1,""],create_round_plot:[8,2,1,""],create_table_plot:[8,2,1,""],create_timeline_plot:[8,2,1,""],fetch_valid_metrics:[8,2,1,""]},"fedn.clients.reducer.state":{ReducerState:[8,1,1,""],ReducerStateToString:[8,4,1,""],StringToReducerState:[8,4,1,""]},"fedn.clients.reducer.state.ReducerState":{idle:[8,3,1,""],instructing:[8,3,1,""],monitoring:[8,3,1,""],setup:[8,3,1,""]},"fedn.clients.reducer.statestore":{mongoreducerstatestore:[9,0,0,"-"],reducerstatestore:[9,0,0,"-"]},"fedn.clients.reducer.statestore.mongoreducerstatestore":{MongoReducerStateStore:[9,1,1,""]},"fedn.clients.reducer.statestore.mongoreducerstatestore.MongoReducerStateStore":{delete_combiner:[9,2,1,""],drop_control:[9,2,1,""],drop_models:[9,2,1,""],get_client:[9,2,1,""],get_combiner:[9,2,1,""],get_combiners:[9,2,1,""],get_compute_context:[9,2,1,""],get_config:[9,2,1,""],get_events:[9,2,1,""],get_first:[9,2,1,""],get_framework:[9,2,1,""],get_latest:[9,2,1,""],get_model_info:[9,2,1,""],get_reducer:[9,2,1,""],get_round_config:[9,2,1,""],get_storage_backend:[9,2,1,""],is_inited:[9,2,1,""],list_clients:[9,2,1,""],list_combiners:[9,2,1,""],set_client:[9,2,1,""],set_combiner:[9,2,1,""],set_compute_context:[9,2,1,""],set_framework:[9,2,1,""],set_latest:[9,2,1,""],set_reducer:[9,2,1,""],set_round_config:[9,2,1,""],set_storage_backend:[9,2,1,""],state:[9,2,1,""],transition:[9,2,1,""],update_client_status:[9,2,1,""]},"fedn.clients.reducer.statestore.reducerstatestore":{ReducerStateStore:[9,1,1,""]},"fedn.clients.reducer.statestore.reducerstatestore.ReducerStateStore":{get_latest:[9,2,1,""],is_inited:[9,2,1,""],set_latest:[9,2,1,""],state:[9,2,1,""],transition:[9,2,1,""]},"fedn.common":{control:[11,0,0,"-"],exceptions:[10,0,0,"-"],net:[12,0,0,"-"],security:[15,0,0,"-"],storage:[16,0,0,"-"],tracer:[20,0,0,"-"]},"fedn.common.control":{"package":[11,0,0,"-"]},"fedn.common.control.package":{Package:[11,1,1,""],PackageRuntime:[11,1,1,""]},"fedn.common.control.package.Package":{"package":[11,2,1,""],upload:[11,2,1,""]},"fedn.common.control.package.PackageRuntime":{dispatcher:[11,2,1,""],download:[11,2,1,""],unpack:[11,2,1,""],validate:[11,2,1,""]},"fedn.common.exceptions":{ModelError:[10,5,1,""]},"fedn.common.net":{connect:[12,0,0,"-"],grpc:[13,0,0,"-"],web:[14,0,0,"-"]},"fedn.common.net.connect":{ConnectorClient:[12,1,1,""],ConnectorCombiner:[12,1,1,""],State:[12,1,1,""],Status:[12,1,1,""]},"fedn.common.net.connect.ConnectorClient":{assign:[12,2,1,""],state:[12,2,1,""]},"fedn.common.net.connect.ConnectorCombiner":{announce:[12,2,1,""],state:[12,2,1,""]},"fedn.common.net.connect.State":{Connected:[12,3,1,""],Disconnected:[12,3,1,""],Error:[12,3,1,""]},"fedn.common.net.connect.Status":{Assigned:[12,3,1,""],TryAgain:[12,3,1,""],Unassigned:[12,3,1,""]},"fedn.common.net.web":{client:[14,0,0,"-"]},"fedn.common.security":{certificate:[15,0,0,"-"],certificatemanager:[15,0,0,"-"]},"fedn.common.security.certificate":{Certificate:[15,1,1,""]},"fedn.common.security.certificate.Certificate":{BITS:[15,3,1,""],CERT_NAME:[15,3,1,""],KEY_NAME:[15,3,1,""],gen_keypair:[15,2,1,""],get_cert:[15,2,1,""],get_key:[15,2,1,""],get_keypair_raw:[15,2,1,""],set_keypair_raw:[15,2,1,""]},"fedn.common.security.certificatemanager":{CertificateManager:[15,1,1,""]},"fedn.common.security.certificatemanager.CertificateManager":{add:[15,2,1,""],find:[15,2,1,""],get_or_create:[15,2,1,""],load_all:[15,2,1,""]},"fedn.common.storage":{db:[17,0,0,"-"],models:[18,0,0,"-"],s3:[19,0,0,"-"]},"fedn.common.storage.db":{mongo:[17,0,0,"-"]},"fedn.common.storage.db.mongo":{connect_to_mongodb:[17,4,1,""],drop_mongodb:[17,4,1,""]},"fedn.common.storage.models":{memorymodelstorage:[18,0,0,"-"],modelstorage:[18,0,0,"-"]},"fedn.common.storage.models.memorymodelstorage":{MemoryModelStorage:[18,1,1,""]},"fedn.common.storage.models.memorymodelstorage.MemoryModelStorage":{exist:[18,2,1,""],get:[18,2,1,""],get_meta:[18,2,1,""],get_ptr:[18,2,1,""],set_meta:[18,2,1,""]},"fedn.common.storage.models.modelstorage":{ModelStorage:[18,1,1,""]},"fedn.common.storage.models.modelstorage.ModelStorage":{exist:[18,2,1,""],get:[18,2,1,""],get_meta:[18,2,1,""],set_meta:[18,2,1,""]},"fedn.common.storage.s3":{base:[19,0,0,"-"],miniorepo:[19,0,0,"-"],s3repo:[19,0,0,"-"]},"fedn.common.storage.s3.base":{Repository:[19,1,1,""]},"fedn.common.storage.s3.base.Repository":{get_artifact:[19,2,1,""],set_artifact:[19,2,1,""]},"fedn.common.storage.s3.miniorepo":{MINIORepository:[19,1,1,""]},"fedn.common.storage.s3.miniorepo.MINIORepository":{client:[19,3,1,""],create_bucket:[19,2,1,""],delete_artifact:[19,2,1,""],delete_objects:[19,2,1,""],get_artifact:[19,2,1,""],get_artifact_stream:[19,2,1,""],list_artifacts:[19,2,1,""],set_artifact:[19,2,1,""]},"fedn.common.storage.s3.s3repo":{S3ModelRepository:[19,1,1,""]},"fedn.common.storage.s3.s3repo.S3ModelRepository":{delete_compute_context:[19,2,1,""],get_compute_package:[19,2,1,""],get_model:[19,2,1,""],get_model_stream:[19,2,1,""],set_compute_context:[19,2,1,""],set_model:[19,2,1,""]},"fedn.common.tracer":{mongotracer:[20,0,0,"-"],tracer:[20,0,0,"-"]},"fedn.common.tracer.mongotracer":{MongoTracer:[20,1,1,""]},"fedn.common.tracer.mongotracer.MongoTracer":{drop_combiner_round:[20,2,1,""],drop_combiner_round_time:[20,2,1,""],drop_latest_model:[20,2,1,""],drop_model_trail:[20,2,1,""],drop_ps_util_monitor:[20,2,1,""],drop_round_time:[20,2,1,""],drop_status:[20,2,1,""],get_latest_round:[20,2,1,""],ps_util_monitor:[20,2,1,""],report:[20,2,1,""],set_combiner_time:[20,2,1,""],set_latest_time:[20,2,1,""],set_round_meta:[20,2,1,""],set_round_meta_reducer:[20,2,1,""],start_monitor:[20,2,1,""],stop_monitor:[20,2,1,""]},"fedn.common.tracer.tracer":{Tracer:[20,1,1,""]},"fedn.common.tracer.tracer.Tracer":{report:[20,2,1,""]},"fedn.utils":{checksum:[21,0,0,"-"],dispatcher:[21,0,0,"-"],helpers:[21,0,0,"-"],kerashelper:[21,0,0,"-"],logger:[21,0,0,"-"],numpyarrayhelper:[21,0,0,"-"],process:[21,0,0,"-"],pytorchhelper:[21,0,0,"-"]},"fedn.utils.checksum":{md5:[21,4,1,""]},"fedn.utils.dispatcher":{Dispatcher:[21,1,1,""]},"fedn.utils.dispatcher.Dispatcher":{run_cmd:[21,2,1,""]},"fedn.utils.helpers":{HelperBase:[21,1,1,""],get_helper:[21,4,1,""]},"fedn.utils.helpers.HelperBase":{get_tmp_path:[21,2,1,""],increment_average:[21,2,1,""],load_model:[21,2,1,""],load_model_from_BytesIO:[21,2,1,""],save_model:[21,2,1,""],serialize_model_to_BytesIO:[21,2,1,""]},"fedn.utils.kerashelper":{KerasHelper:[21,1,1,""]},"fedn.utils.kerashelper.KerasHelper":{average_weights:[21,2,1,""],get_tmp_path:[21,2,1,""],get_weights:[21,2,1,""],increment_average:[21,2,1,""],load_model:[21,2,1,""],load_model_from_BytesIO:[21,2,1,""],save_model:[21,2,1,""],serialize_model_to_BytesIO:[21,2,1,""],set_weights:[21,2,1,""]},"fedn.utils.logger":{Logger:[21,1,1,""]},"fedn.utils.numpyarrayhelper":{NumpyArrayHelper:[21,1,1,""]},"fedn.utils.numpyarrayhelper.NumpyArrayHelper":{get_tmp_path:[21,2,1,""],increment_average:[21,2,1,""],load_model:[21,2,1,""],load_model_from_BytesIO:[21,2,1,""],save_model:[21,2,1,""],serialize_model_to_BytesIO:[21,2,1,""]},"fedn.utils.process":{run_process:[21,4,1,""]},"fedn.utils.pytorchhelper":{PytorchHelper:[21,1,1,""]},"fedn.utils.pytorchhelper.PytorchHelper":{get_tmp_path:[21,2,1,""],increment_average:[21,2,1,""],load_model:[21,2,1,""],load_model_from_BytesIO:[21,2,1,""],save_model:[21,2,1,""],serialize_model_to_BytesIO:[21,2,1,""]},fedn:{aggregators:[4,0,0,"-"],clients:[5,0,0,"-"],common:[10,0,0,"-"],utils:[21,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"0":[12,24],"00148":24,"04":1,"1":[0,4,6,8,12,21,27],"10":[21,24],"12080":[1,25],"16bg":1,"180":4,"1gb":24,"2":[0,6,8,12,24,27],"20":1,"2021":24,"2048":15,"2103":24,"3":[0,6,8],"4":8,"5":1,"50":25,"8081":2,"8090":24,"8gb":1,"abstract":[4,9,18,19,20,21],"byte":19,"case":[1,2,24],"class":[2,4,6,8,9,11,12,15,18,19,20,21,25,27],"default":[0,1,9,24],"do":[0,24],"enum":[6,8,12],"function":[1,25],"import":[25,27],"new":[2,22],"return":[6,8,9,11,12,15,17,18,19,20,21,27],"true":[12,15,19,27],"try":27,"while":0,A:[0,24,27],As:2,But:2,By:[0,1],For:[0,1,27],If:24,In:[2,24,27],It:[0,25,27],The:[0,1,21,24,25],Then:[0,1,2,27],There:[2,27],These:[2,27],To:[2,24],__future__:27,__main__:27,__name__:27,a_nizksumi:24,aa:24,ab:24,abc:[4,8,9,18,20,21],abl:[1,27],about:[24,27],abov:27,access:[1,24],accommod:0,accompish:27,account:25,achiev:[0,24],across:1,activ:[0,9,24],actor:0,actual:[1,27],ad:[1,25],add:[2,15],addi:24,addit:[0,1,24],address:1,addtion:[2,24],advanc:2,after:27,agent:0,aggreg:[0,3,23,24],aggregatorbas:4,agnost:[22,24],agreement:24,ai:24,ait:24,alawadi:24,algo:2,all:[1,24],allianc:[0,24],alloc:25,allow:[0,1,2,24,25],along:27,alreadi:2,also:[0,1,2],amount:0,an:[0,2,6,8,12,21,22,24],analysi:24,andrea:24,ani:[0,24],ann:[0,24,27],announc:12,anywher:0,apach:24,api:[0,2,25],app:24,appli:0,applic:24,appreci:24,appropri:1,ar:[0,1,2,24,25,27],arbitrari:2,architectur:[22,24],arg:21,argv:27,arrai:21,articl:24,artifici:0,arxiv:24,ask:22,aspect:1,assign:[2,9,12,25],assum:[1,2,27],assumpt:27,async:25,attach:24,author:24,auto:24,avail:[1,24],averag:21,average_weight:21,b:0,back:25,backbon:0,base:[1,4,6,8,9,10,11,12,15,16,18,20,21,24,27],baseexcept:10,batch_siz:27,been:[2,25],befor:[1,24,25],behavior:2,being:1,below:[0,27],benchmark:24,best:27,beta:24,better:25,between:[0,2],binari:[2,21],bit:15,black:[2,24],blob:2,both:24,box:[0,2,24],bucket:[8,19,25],bucket_nam:19,buffer:21,bug:[24,25],bugfix:25,built:24,bundl:[25,27],bypass:2,bytesio:21,cach:27,call:27,can:[0,1,24],casa:24,caus:25,cert:15,cert_nam:15,certif:[3,10],certificatemanag:[3,10],chang:[1,24],check_round_validity_polici:2,checksum:[3,23],choos:25,cifar10:24,cifar:24,citat:22,cite:24,classif:24,classifi:27,clear:2,client:[2,10,12,19,23,24,25],client_allocation_polici:2,client_allocation_policy_first_avail:2,client_allocation_policy_least_pack:2,client_data:9,clientstat:6,clientstatetostr:6,clone:24,cloud:[0,24],cmd_type:21,cnn:24,code:[0,2,24,25,27],collabor:22,collect:2,com:[2,24,25],combin:[2,5,9,12,23,24,25,27],combine_model:4,combiner_data:9,combinerhost:25,combinerport:25,command:27,commerci:22,commit:25,common:[3,23],commun:[22,25],compat:[21,27],complet:27,compos:[1,24,25],comput:[0,21,24,25],compute_bundle_dir:8,compute_packag:19,config:[1,3,5,9,11,17,19,21,24,25],configur:[0,1,25],confirm:1,connect:[0,1,3,10,27],connect_to_mongodb:17,connectorcli:12,connectorcombin:12,consid:24,consider:1,consist:[1,24],constraint:2,construct:[0,25],contain:[24,27],content:[23,27],contribut:22,contributor:22,control:[1,2,3,4,5,10],conveni:25,conveninc:25,coordin:[0,24],copi:[1,24],core:[1,22],correctli:27,cpu:1,creat:[22,24],create_box_plot:8,create_bucket:19,create_client_plot:8,create_client_training_distribut:8,create_combiner_plot:8,create_cpu_plot:8,create_dir:15,create_round_plot:8,create_seed_model:27,create_table_plot:8,create_timeline_plot:8,cross:[1,24],current:[0,1,2,25],custom:[0,24],cwd:[15,21],dashboard:[1,25],data:[0,24,25],databas:[2,24],dataset:[0,24,27],db:[10,16],de:27,decentr:24,def:27,defin:[0,4,21,27],definit:[25,27],delet:2,delete_artifact:19,delete_combin:9,delete_compute_context:19,delete_object:19,depend:[1,24,25,27],deploi:[0,24],deploy:22,deseri:[2,27],design:[0,24],desislava:24,detail:[0,24],detect:24,develop:[0,22,24],devic:[1,24],dict:27,dictat:0,dictionari:9,differ:[0,1,27],differenti:2,digit:[24,27],dir:[21,27],directli:24,directori:[2,15],disallow:2,disconnect:12,discord:[22,24,25],discoveri:0,disk:21,dispatch:[3,11,23,25,27],distribut:[22,25],divid:24,dn:1,doc:25,docker:[1,24,25,27],dockerfil:25,document:[22,25],doe:27,done:27,download:[11,25,27],drop_combiner_round:20,drop_combiner_round_tim:20,drop_control:9,drop_latest_model:20,drop_model:9,drop_model_trail:20,drop_mongodb:17,drop_ps_util_monitor:20,drop_round_tim:20,drop_statu:20,due:1,dure:[0,2],e:[0,24,27],each:[0,1,27],earli:2,easiest:24,easili:1,edg:0,edit:1,effici:24,ekmefjord2021scal:24,ekmefjord:24,empti:25,enabl:2,encod:24,end:[1,24],endpoint:27,enforc:2,engag:24,ensembl:0,ensur:25,enterpris:[2,24],entir:2,entri:27,entrypoint:2,enumer:[6,8,12],environ:[1,22,24],environemnt:27,epoch:27,error:[12,27],etc:[1,24,25,27],evenli:25,event:[24,25],exampl:[0,1,2,24,25,27],except:[3,23,27],exect:27,execut:[0,25,27],exist:18,expand:2,expected_checksum:11,explor:24,expos:[0,24],express:24,extend:2,extern:[24,25],extra:1,f:[1,24],facilit:2,fals:[2,11,12,19],fashion:2,faster:25,featur:[2,22],fedavg:[0,2,3,23],feder:[2,22,25],fedml:0,fedn:0,fedn_default:24,fedn_defaultdock:24,fedn_pb2:[10,12],fedn_pb2_grpc:[10,12],feel:25,fetch_valid_metr:8,few:24,fh:27,field:25,figur:[0,27],file:[1,2,21,24,25,27],file_path:21,filenam:[9,27],fill:0,find:[15,24],firewal:1,first:[0,1,24],fit:27,flavor:1,flexibl:24,flush:27,fname:21,focus:2,fog:0,folder:27,follow:[0,1,2,24,27],form:[0,25],format:[25,27],framework:[22,24,25,27],fraud:24,fraud_kera:24,frequent:22,from:[0,1,21,22,25,27],frontend:24,full:24,fulli:[1,22],futur:2,g:[0,24],gen_keypair:15,gener:[0,1],get:[0,18,22,25],get_artifact:19,get_artifact_stream:19,get_cert:15,get_client:9,get_combin:9,get_compute_context:9,get_compute_packag:19,get_config:9,get_ev:9,get_first:9,get_framework:9,get_help:21,get_kei:15,get_keypair_raw:15,get_latest:9,get_latest_round:20,get_meta:18,get_model:19,get_model_info:9,get_model_stream:19,get_or_cr:15,get_ptr:18,get_reduc:9,get_round_config:9,get_storage_backend:9,get_tmp_path:21,get_weight:[21,27],git:24,github:[2,24,25],give:27,given:27,global:0,go:[22,25],good:[0,24],graphic:24,group:1,grow:0,grpc:[0,1,10,12],guid:25,gz:27,ha:2,hand:27,handl:[0,1,2,27],happen:[0,2],hard:25,hardwar:0,harmon:25,have:[2,24,25],heavili:[1,24],helland:24,help:[0,2,24],helper:[2,3,4,9,23,25,27],helper_typ:21,helperbas:21,henc:[0,25],here:[22,27],heterogen:[22,24],hierarchi:[25,27],high:24,highli:0,hold:0,home:[21,27],horizont:[0,24],host:[11,12,24],hostnam:1,how:[0,27],howev:[2,27],http:[2,24,25],human:24,i:25,id:[4,12],identifi:1,idl:[6,8],illustr:[0,27],imag:25,imdb:24,immut:[0,2],implement:[0,2,24],importantli:0,improv:25,includ:[0,1,24,25],incompat:1,incorpor:24,increment:21,increment_averag:21,independ:[0,27],index:[21,26],individu:0,inform:[1,24],infrastructur:[1,24],ingress:[0,1,24],initi:[24,27],initial_model:8,initil:2,input:[2,27],inquir:24,instanc:[2,19,21],instance_nam:19,instead:25,instruct:[8,24],integr:0,inter:2,interact:[0,2,27],interest:24,interfac:[3,5,24],intiti:2,introduc:25,involv:[24,27],io:24,ip:1,is_fil:19,is_init:9,issu:24,iter:[21,27],job:25,join:24,journal:24,json:[2,27],jupyt:24,just:25,k8:27,kei:[15,24,27],kera:[1,21,24,25,27],kerashelp:[2,3,23,27],kesson:24,key_nam:15,know:2,known:27,krm:27,kubernet:24,lab:24,lai:0,laid:0,languag:0,larg:24,latest:[9,25],launch:24,layout:25,learn:[22,24],least:1,let:[2,24],level:[0,2,27],lf:24,librari:27,licens:22,lifecycl:27,like:[19,25],list_artifact:19,list_client:9,list_combin:9,live:1,load:[21,27],load_al:15,load_model:[21,27],load_model_from_bytesio:21,local:[0,24,25,27],local_dataset:27,localhost:[2,24],log:27,log_level:21,logger:[3,23],logic:[0,25,27],longer:25,look:[25,27],lot:25,lstm:24,machin:[22,24],made:0,main:[2,24,27],maintain:[0,24,27],make:[0,1,2,22,27],manag:[24,25],managm:24,mani:[0,24,25,27],map:1,massiv:24,master:2,mattia:24,max_client:25,maximum:25,md5:21,md:[24,27],mean:[0,24],mechan:0,mediat:0,meet:0,memori:25,memorymodelstorag:[10,16],method:2,metric:[8,25],might:1,minim:24,minio:[1,24,25],miniorepo:[10,16],miniorepositori:19,mkdir:27,ml:[24,27],mlflow:24,mlop:24,mlouk:24,mnist:[1,24,25,27],mnist_model:27,model:[0,1,2,8,9,10,16,19,21,22,25],model_bytesio:21,model_id:[4,9,18,19],model_in:27,model_metadata:18,model_next:21,model_out:27,model_trail:9,model_update_in:2,model_update_out:2,modelerror:10,models_dir:8,modelservic:[3,4,5],modelstorag:[10,16],modifi:[1,2],modul:[23,26],modular:[22,24],mongo:[1,10,16,24],mongo_config:20,mongodb:[1,24],mongoexpress:1,mongoreducerstatestor:[5,8],mongotrac:[3,10],monitor:[8,23,24,25],more:[0,2,24,25,27],morgan:24,most:[0,2,27],msg:20,much:24,multiparti:2,multipl:24,must:[19,21],myhost:12,myport:12,n:21,name:[1,9,11,12,15,19,25],nativ:[24,27],natur:2,navig:2,necessari:[1,2,27],need:[0,1,24,27],net:[3,10],network:[0,2,3,5,22,24,25,27],network_id:[9,17,20],neural:0,next:24,node:[0,1,24],none:[4,8,9,11,12,15,19,20,21],note:[1,2,22,27],now:[1,25],np:27,npz:[21,25,27],nr_exampl:27,nr_expected_model:4,nr_required_model:4,number:[0,1,25],numpi:[21,27],numpyarrayhelp:[3,23],object:[8,11,12,15,19,21],off:25,offer:24,ola:24,on_model_upd:4,on_model_valid:4,onc:[1,2],one:[0,1,21,24,27],onli:[0,27],onlin:25,open:[0,22,24,27],openssl:1,oper:[2,27],option:[1,2],orchestr:0,org:24,organiz:22,os:27,other:24,our:24,out:[0,2,24],outcom:0,output:[2,9,21,27],outsid:1,over:[0,25],overal:0,overview:[22,27],own:[2,24,25],packag:[23,24,25],package_dir:11,package_path:11,packageruntim:11,page:26,paper:24,param:27,paramet:[0,2,6,8,9,11,15,17,18,19,20,21,25],part:2,particip:27,particular:27,partit:27,pass:27,password:1,patch:25,path:21,pattern:[0,24],pem:15,perform:[2,24,25],persist:25,phase:25,pickl:27,pictur:0,plan:[0,1],pleas:[2,24],plot:[3,5,25],point:[25,27],polici:25,port:[0,1,11,12,24],possibl:[0,1,2,24,25,27],practic:27,pre:24,prefer:27,preprint:24,prereq:25,present:27,preshared_cert:12,prevent:25,previou:25,previous:25,principl:27,print:27,print_funct:27,prior:[0,25],priorit:2,privat:[0,24],privatekei:15,procedur:2,proceed:[1,24],process:[2,3,23],product:[1,2,22,24,25],program:[0,27],progress:24,project:[2,24,27],proport:0,protocol:[0,2],proven:24,provid:[0,1,2,24,27],ps_util_monitor:20,pseudo:[1,22],pull:24,purpos:0,putput:27,py:[2,27],python3:0,python:27,pytorch:[21,24,25],pytorchhelp:[2,3,23],question:22,r:27,rais:27,ram:1,reach:24,read:[0,27],read_data:27,readi:27,real:[22,24],reattach:2,receiv:0,recent:24,reciev:27,recognit:24,recommend:[1,27],record:9,reduc:[2,5,23,24,25,27],reducer_data:9,reducerconfig:8,reducerst:8,reducerstatestor:[5,8],reducerstatetostr:8,refactor:25,refer:24,refresh:25,reiniti:2,rel:27,relat:25,releas:[2,22],repeat:1,report:[20,24],repositori:[19,24,25],request:[0,24,27],requir:[0,27],research:24,resid:25,respons:0,rest:0,restart:2,restservic:[3,5],result:0,resum:25,right:25,role:[0,9,27],root:1,round:[0,20,25],round_meta:20,round_tim:20,roundcontrol:[3,5],routin:2,rpc:[0,1],run:[0,1,2,24,25,27],run_cmd:21,run_path:11,run_process:21,runner:21,runtim:2,s3:[8,10,16,25],s3modelrepositori:19,s3repo:[10,16],s:[1,22],saa:24,sadi:24,safe_load:27,salman:24,same:[1,24,27],sandbox:24,save:[21,27],save_model:[21,27],scalabl:[0,2,24],scale:[0,1,22,24],scaleout:22,scaleoutsystem:[2,24,25],scenario:24,scheme:[0,24],sdk:[22,27],seamlessli:[22,24],search:26,second:1,secur:[1,2,3,10,12,24,25],see:[2,24],seed:[2,24],seeen:2,select:25,self:2,sens:[0,2],sentiment:24,separ:25,sequenc:21,sequenti:21,serial:[2,21,27],serializaion:27,serialize_model_to_bytesio:21,serv:[1,24],server:[0,1,4,10,12,22,24,25],servic:24,set:[1,8,9,24,25,27],set_artifact:19,set_client:9,set_combin:9,set_combiner_tim:20,set_compute_context:[9,19],set_framework:9,set_keypair_raw:15,set_latest:9,set_latest_tim:20,set_meta:18,set_model:19,set_reduc:9,set_round_config:9,set_round_meta:20,set_round_meta_reduc:20,set_storage_backend:9,set_verbos:27,set_weight:[21,27],setup:[8,25],sever:[25,27],sgd:0,should:[2,27],show:24,shown:25,side:0,sign:24,silo:[1,24],simpl:[0,27],singl:[0,1,21,24,27],siso:2,size:[1,24],sklearn:24,slightli:1,small:27,so:[25,27],softwar:0,some:27,sourc:[4,6,8,9,10,11,12,15,17,18,19,20,21,22,24],specif:27,specifi:0,spjuth:24,spread:25,stabil:25,stackn:24,stage:27,standalon:24,standard:[0,2],stare:0,start:[0,1,2,22,25],start_monitor:20,state:[0,3,5,9,12,25],statestor:[5,8],statu:[9,12,25],stdin:27,step:[1,24,27],stop_monitor:20,storag:[3,4,10,24],storage_backend:8,stoyanova:24,str:21,strategi:[0,1,24],stringtoreducerst:8,studio:22,submit:25,submodul:[5,16,23],subpackag:23,subset:27,subsystem:0,sudo:1,support:[0,22,25],sure:[1,24],svm:0,sy:27,system:[0,24],tag:1,take:27,tar:27,target:[0,1],task:27,templat:[1,24,25],tempmodelstorag:[10,16],temporari:21,tensorflow:[24,27],test:[1,2,24,25],tf:27,thei:[0,25],them:1,therefor:24,thereof:2,thi:[0,1,2,24,25,27],thousand:24,three:0,through:[24,25,27],thu:0,ticket:24,tier:[2,24],time:[24,25],timelin:0,timeout:[4,25],titl:24,tmp:27,to_dict:9,to_fil:21,togeth:24,token:[11,12],tool:24,toor:24,torchserv:24,total:0,tracer:[3,10],track:24,trail:0,train:[0,2,6,25],trainer:9,training_sampl:27,trainset:27,transit:9,treat:24,tree:24,trigger:0,tryagain:12,tune:[1,24],tutori:27,two:[0,1],type:[0,2,8,21,24],typic:27,ubuntu:1,ui:[24,25],unassign:12,under:[1,24],uniqu:[0,1],unpack:[11,27],unseen:2,unsign:1,untrain:24,up:[0,1,24,27],updat:[0,1,2,9,21,24,25,27],update_client_statu:9,upgrad:25,upload:[2,11,24,25,27],upon:[0,27],us:[0,1,22,25],user:[0,2,24,25],util:[2,3,23,27],v1:27,v:24,valid:[0,4,6,9,11,24,25,27],valu:[0,6,8,12],vari:0,variabl:[1,2],variant:2,varieti:0,variou:0,verbos:27,verify_cert:12,version:[24,25],vgg16:24,via:1,view:[0,25],virtual:24,volum:24,vscode:24,wai:[1,2,24,27],walk:27,warn:1,watch:24,we:[1,2,24,27],web:[10,12],webui:24,weight:[21,27],weights_:21,weights_dict:21,weights_next:21,well:[0,2,27],when:[0,1,27],where:[0,2,22,27],which:[1,25],whoallah:25,whose:0,wiwmethod:2,work:[0,2,21,24],world:[22,24],write:[0,27],written:27,www:24,x_train:27,y_train:27,yaml:[1,2,24,27],yamlerror:27,ye:2,year:24,yet:2,you:[1,24,25,27],your:[1,2,24,25],youtub:24},titles:["Architecture overview","Distributed deployment","Frequently asked questions","fedn package","fedn.aggregators package","fedn.clients package","fedn.clients.client package","fedn.clients.combiner package","fedn.clients.reducer package","fedn.clients.reducer.statestore package","fedn.common package","fedn.common.control package","fedn.common.net package","fedn.common.net.grpc package","fedn.common.net.web package","fedn.common.security package","fedn.common.storage package","fedn.common.storage.db package","fedn.common.storage.models package","fedn.common.storage.s3 package","fedn.common.tracer package","fedn.utils package","Welcome to FEDn!","fedn","Welcome to FEDn\u2019s documentation","Release Notes","SDK Documentation","Creating a new federated model for use with FEDn"],titleterms:{"0":25,"1":[1,25],"2":[1,25],"3":[1,25],"4":[1,25],"5":25,"default":27,"do":2,"new":[25,27],The:27,access:27,addit:2,aggreg:[2,4],algorithm:[0,2],architectur:0,ask:2,attach:1,averag:0,base:19,can:2,certif:[1,15],certificatemanag:15,checksum:21,citat:24,client:[0,1,3,5,6,7,8,9,14,27],collabor:24,combin:[0,1,3,7],commerci:24,common:[10,11,12,13,14,15,16,17,18,19,20],commun:[0,24],compon:0,comput:[2,27],config:8,configur:2,connect:12,content:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],contribut:24,contributor:24,control:[0,8,11],core:24,creat:27,data:27,db:17,defin:2,deploi:1,deploy:[1,24],develop:2,dispatch:21,distribut:[1,24],document:[24,26],entrypoint:27,etc:2,except:10,explain:27,featur:24,fedavg:4,feder:[0,24,27],fedn:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,27],fedn_pb2:13,fedn_pb2_grpc:13,fetch:2,fix:25,flow:0,folder:2,framework:2,frequent:2,from:24,fulli:24,get:24,go:24,grpc:13,helper:21,here:24,hierarch:0,host:1,how:2,i:2,includ:2,instead:2,interfac:8,kerashelp:21,licens:24,like:2,local:2,logger:21,main:0,make:24,mechan:2,memorymodelstorag:18,miniorepo:19,ml:2,model:[18,24,27],modelservic:7,modelstorag:18,modul:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],mongo:17,mongoreducerstatestor:9,mongotrac:20,monitor:3,need:2,net:[12,13,14],network:[1,8],note:25,numpyarrayhelp:21,organiz:24,other:[2,25],overview:0,packag:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,27],particip:2,plan:2,plot:8,polici:2,prerequisit:1,preserv:2,privaci:2,process:21,pseudo:24,pytorchhelp:21,q:2,question:2,reduc:[0,1,3,8,9],reducerstatestor:9,refer:1,releas:25,remot:2,remov:2,replac:2,restservic:8,round:2,roundcontrol:7,s3:19,s3repo:19,s:[24,25],scaleout:24,sdk:26,secur:15,server:13,servic:[0,1],skip:2,sklearn:2,start:24,state:[6,8],statestor:9,storag:[16,17,18,19],structur:27,studio:24,submodul:[3,4,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21],subpackag:[3,5,8,10,12,16],suggest:27,support:[1,2,24],tempmodelstorag:18,tracer:20,train:[24,27],us:[2,24,27],util:21,v0:25,valid:2,web:14,welcom:[22,24],what:[2,25],when:2,where:24,xgboost:2,you:2}})