Search.setIndex({docnames:["architecture","deployment","faq","fedn","fedn.aggregators","fedn.clients","fedn.clients.client","fedn.clients.combiner","fedn.clients.reducer","fedn.clients.reducer.statestore","fedn.common","fedn.common.control","fedn.common.net","fedn.common.net.grpc","fedn.common.net.web","fedn.common.security","fedn.common.storage","fedn.common.storage.db","fedn.common.storage.models","fedn.common.storage.s3","fedn.common.tracer","fedn.tests","fedn.utils","index","modules","releasenotes","sdk","tutorial"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["architecture.rst","deployment.rst","faq.rst","fedn.rst","fedn.aggregators.rst","fedn.clients.rst","fedn.clients.client.rst","fedn.clients.combiner.rst","fedn.clients.reducer.rst","fedn.clients.reducer.statestore.rst","fedn.common.rst","fedn.common.control.rst","fedn.common.net.rst","fedn.common.net.grpc.rst","fedn.common.net.web.rst","fedn.common.security.rst","fedn.common.storage.rst","fedn.common.storage.db.rst","fedn.common.storage.models.rst","fedn.common.storage.s3.rst","fedn.common.tracer.rst","fedn.tests.rst","fedn.utils.rst","index.rst","modules.rst","releasenotes.rst","sdk.rst","tutorial.rst"],objects:{"":[[3,0,0,"-","fedn"]],"fedn.aggregators":[[4,0,0,"-","aggregator"]],"fedn.aggregators.aggregator":[[4,1,1,"","AggregatorBase"]],"fedn.aggregators.aggregator.AggregatorBase":[[4,2,1,"","combine_models"],[4,2,1,"","on_model_update"],[4,2,1,"","on_model_validation"]],"fedn.clients":[[6,0,0,"-","client"],[7,0,0,"-","combiner"],[8,0,0,"-","reducer"]],"fedn.clients.client":[[6,0,0,"-","state"]],"fedn.clients.client.state":[[6,1,1,"","ClientState"],[6,4,1,"","ClientStateToString"]],"fedn.clients.client.state.ClientState":[[6,3,1,"","idle"],[6,3,1,"","training"],[6,3,1,"","validating"]],"fedn.clients.reducer":[[8,0,0,"-","config"],[8,0,0,"-","state"],[9,0,0,"-","statestore"]],"fedn.clients.reducer.config":[[8,1,1,"","Config"],[8,1,1,"","ReducerConfig"]],"fedn.clients.reducer.config.ReducerConfig":[[8,3,1,"","compute_bundle_dir"],[8,3,1,"","initial_model"],[8,3,1,"","models_dir"],[8,3,1,"","storage_backend"]],"fedn.clients.reducer.state":[[8,1,1,"","ReducerState"],[8,4,1,"","ReducerStateToString"],[8,4,1,"","StringToReducerState"]],"fedn.clients.reducer.state.ReducerState":[[8,3,1,"","idle"],[8,3,1,"","instructing"],[8,3,1,"","monitoring"],[8,3,1,"","setup"]],"fedn.clients.reducer.statestore":[[9,0,0,"-","mongoreducerstatestore"],[9,0,0,"-","reducerstatestore"]],"fedn.clients.reducer.statestore.mongoreducerstatestore":[[9,1,1,"","MongoReducerStateStore"]],"fedn.clients.reducer.statestore.mongoreducerstatestore.MongoReducerStateStore":[[9,2,1,"","delete_combiner"],[9,2,1,"","drop_control"],[9,2,1,"","drop_models"],[9,2,1,"","get_client"],[9,2,1,"","get_combiner"],[9,2,1,"","get_combiners"],[9,2,1,"","get_compute_context"],[9,2,1,"","get_config"],[9,2,1,"","get_events"],[9,2,1,"","get_first"],[9,2,1,"","get_framework"],[9,2,1,"","get_latest"],[9,2,1,"","get_model_info"],[9,2,1,"","get_reducer"],[9,2,1,"","get_round_config"],[9,2,1,"","get_storage_backend"],[9,2,1,"","is_inited"],[9,2,1,"","list_clients"],[9,2,1,"","list_combiners"],[9,2,1,"","set_client"],[9,2,1,"","set_combiner"],[9,2,1,"","set_compute_context"],[9,2,1,"","set_framework"],[9,2,1,"","set_latest"],[9,2,1,"","set_reducer"],[9,2,1,"","set_round_config"],[9,2,1,"","set_storage_backend"],[9,2,1,"","state"],[9,2,1,"","transition"],[9,2,1,"","update_client_status"]],"fedn.clients.reducer.statestore.reducerstatestore":[[9,1,1,"","ReducerStateStore"]],"fedn.clients.reducer.statestore.reducerstatestore.ReducerStateStore":[[9,2,1,"","get_latest"],[9,2,1,"","is_inited"],[9,2,1,"","set_latest"],[9,2,1,"","state"],[9,2,1,"","transition"]],"fedn.common":[[11,0,0,"-","control"],[10,0,0,"-","exceptions"],[12,0,0,"-","net"],[15,0,0,"-","security"],[16,0,0,"-","storage"],[20,0,0,"-","tracer"]],"fedn.common.control":[[11,0,0,"-","package"]],"fedn.common.control.package":[[11,1,1,"","Package"],[11,1,1,"","PackageRuntime"]],"fedn.common.control.package.Package":[[11,2,1,"","package"],[11,2,1,"","upload"]],"fedn.common.control.package.PackageRuntime":[[11,2,1,"","dispatcher"],[11,2,1,"","download"],[11,2,1,"","unpack"],[11,2,1,"","validate"]],"fedn.common.exceptions":[[10,5,1,"","ModelError"]],"fedn.common.net":[[12,0,0,"-","connect"],[13,0,0,"-","grpc"],[14,0,0,"-","web"]],"fedn.common.net.connect":[[12,1,1,"","ConnectorClient"],[12,1,1,"","ConnectorCombiner"],[12,1,1,"","State"],[12,1,1,"","Status"]],"fedn.common.net.connect.ConnectorClient":[[12,2,1,"","assign"],[12,2,1,"","state"]],"fedn.common.net.connect.ConnectorCombiner":[[12,2,1,"","announce"],[12,2,1,"","state"]],"fedn.common.net.connect.State":[[12,3,1,"","Connected"],[12,3,1,"","Disconnected"],[12,3,1,"","Error"]],"fedn.common.net.connect.Status":[[12,3,1,"","Assigned"],[12,3,1,"","TryAgain"],[12,3,1,"","UnAuthorized"],[12,3,1,"","UnMatchedConfig"],[12,3,1,"","Unassigned"]],"fedn.common.net.web":[[14,0,0,"-","client"]],"fedn.common.security":[[15,0,0,"-","certificate"],[15,0,0,"-","certificatemanager"]],"fedn.common.security.certificate":[[15,1,1,"","Certificate"]],"fedn.common.security.certificate.Certificate":[[15,3,1,"","BITS"],[15,3,1,"","CERT_NAME"],[15,3,1,"","KEY_NAME"],[15,2,1,"","gen_keypair"],[15,2,1,"","get_cert"],[15,2,1,"","get_key"],[15,2,1,"","get_keypair_raw"],[15,2,1,"","set_keypair_raw"]],"fedn.common.security.certificatemanager":[[15,1,1,"","CertificateManager"]],"fedn.common.security.certificatemanager.CertificateManager":[[15,2,1,"","add"],[15,2,1,"","find"],[15,2,1,"","get_or_create"],[15,2,1,"","load_all"]],"fedn.common.storage":[[17,0,0,"-","db"],[18,0,0,"-","models"],[19,0,0,"-","s3"]],"fedn.common.storage.db":[[17,0,0,"-","mongo"]],"fedn.common.storage.db.mongo":[[17,4,1,"","connect_to_mongodb"],[17,4,1,"","drop_mongodb"]],"fedn.common.storage.models":[[18,0,0,"-","memorymodelstorage"],[18,0,0,"-","modelstorage"]],"fedn.common.storage.models.memorymodelstorage":[[18,1,1,"","MemoryModelStorage"]],"fedn.common.storage.models.memorymodelstorage.MemoryModelStorage":[[18,2,1,"","exist"],[18,2,1,"","get"],[18,2,1,"","get_meta"],[18,2,1,"","get_ptr"],[18,2,1,"","set_meta"]],"fedn.common.storage.models.modelstorage":[[18,1,1,"","ModelStorage"]],"fedn.common.storage.models.modelstorage.ModelStorage":[[18,2,1,"","exist"],[18,2,1,"","get"],[18,2,1,"","get_meta"],[18,2,1,"","set_meta"]],"fedn.common.storage.s3":[[19,0,0,"-","base"],[19,0,0,"-","miniorepo"],[19,0,0,"-","s3repo"]],"fedn.common.storage.s3.base":[[19,1,1,"","Repository"]],"fedn.common.storage.s3.base.Repository":[[19,2,1,"","get_artifact"],[19,2,1,"","set_artifact"]],"fedn.common.storage.s3.miniorepo":[[19,1,1,"","MINIORepository"]],"fedn.common.storage.s3.miniorepo.MINIORepository":[[19,3,1,"","client"],[19,2,1,"","create_bucket"],[19,2,1,"","delete_artifact"],[19,2,1,"","delete_objects"],[19,2,1,"","get_artifact"],[19,2,1,"","get_artifact_stream"],[19,2,1,"","list_artifacts"],[19,2,1,"","set_artifact"]],"fedn.common.storage.s3.s3repo":[[19,1,1,"","S3ModelRepository"]],"fedn.common.storage.s3.s3repo.S3ModelRepository":[[19,2,1,"","delete_compute_context"],[19,2,1,"","get_compute_package"],[19,2,1,"","get_model"],[19,2,1,"","get_model_stream"],[19,2,1,"","set_compute_context"],[19,2,1,"","set_model"]],"fedn.common.tracer":[[20,0,0,"-","mongotracer"],[20,0,0,"-","tracer"]],"fedn.common.tracer.mongotracer":[[20,1,1,"","MongoTracer"]],"fedn.common.tracer.mongotracer.MongoTracer":[[20,2,1,"","drop_combiner_round"],[20,2,1,"","drop_combiner_round_time"],[20,2,1,"","drop_latest_model"],[20,2,1,"","drop_model_trail"],[20,2,1,"","drop_ps_util_monitor"],[20,2,1,"","drop_round_time"],[20,2,1,"","drop_status"],[20,2,1,"","get_latest_round"],[20,2,1,"","ps_util_monitor"],[20,2,1,"","report"],[20,2,1,"","set_combiner_time"],[20,2,1,"","set_latest_time"],[20,2,1,"","set_round_meta"],[20,2,1,"","set_round_meta_reducer"],[20,2,1,"","start_monitor"],[20,2,1,"","stop_monitor"]],"fedn.common.tracer.tracer":[[20,1,1,"","Tracer"]],"fedn.common.tracer.tracer.Tracer":[[20,2,1,"","report"]],"fedn.utils":[[22,0,0,"-","checksum"],[22,0,0,"-","dispatcher"],[22,0,0,"-","helpers"],[22,0,0,"-","kerashelper"],[22,0,0,"-","logger"],[22,0,0,"-","numpyarrayhelper"],[22,0,0,"-","process"],[22,0,0,"-","pytorchhelper"]],"fedn.utils.checksum":[[22,4,1,"","md5"]],"fedn.utils.dispatcher":[[22,1,1,"","Dispatcher"]],"fedn.utils.dispatcher.Dispatcher":[[22,2,1,"","run_cmd"]],"fedn.utils.helpers":[[22,1,1,"","HelperBase"],[22,4,1,"","get_helper"]],"fedn.utils.helpers.HelperBase":[[22,2,1,"","get_tmp_path"],[22,2,1,"","increment_average"],[22,2,1,"","load_model"],[22,2,1,"","load_model_from_BytesIO"],[22,2,1,"","save_model"],[22,2,1,"","serialize_model_to_BytesIO"]],"fedn.utils.kerashelper":[[22,1,1,"","KerasHelper"]],"fedn.utils.kerashelper.KerasHelper":[[22,2,1,"","average_weights"],[22,2,1,"","get_tmp_path"],[22,2,1,"","get_weights"],[22,2,1,"","increment_average"],[22,2,1,"","load_model"],[22,2,1,"","load_model_from_BytesIO"],[22,2,1,"","save_model"],[22,2,1,"","serialize_model_to_BytesIO"],[22,2,1,"","set_weights"]],"fedn.utils.logger":[[22,1,1,"","Logger"]],"fedn.utils.numpyarrayhelper":[[22,1,1,"","NumpyArrayHelper"]],"fedn.utils.numpyarrayhelper.NumpyArrayHelper":[[22,2,1,"","get_tmp_path"],[22,2,1,"","increment_average"],[22,2,1,"","load_model"],[22,2,1,"","load_model_from_BytesIO"],[22,2,1,"","save_model"],[22,2,1,"","serialize_model_to_BytesIO"]],"fedn.utils.process":[[22,4,1,"","run_process"]],"fedn.utils.pytorchhelper":[[22,1,1,"","PytorchHelper"]],"fedn.utils.pytorchhelper.PytorchHelper":[[22,2,1,"","get_tmp_path"],[22,2,1,"","increment_average"],[22,2,1,"","load_model"],[22,2,1,"","load_model_from_BytesIO"],[22,2,1,"","save_model"],[22,2,1,"","serialize_model_to_BytesIO"]],fedn:[[4,0,0,"-","aggregators"],[5,0,0,"-","clients"],[10,0,0,"-","common"],[21,0,0,"-","tests"],[22,0,0,"-","utils"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception"},terms:{"0":[2,12,23,27],"00148":23,"04":1,"1":[0,4,6,8,12,22,27],"10":22,"12080":[1,25],"16bg":1,"180":4,"1gb":23,"2":[0,6,8,12,23,27],"20":1,"2021":23,"2048":15,"2103":23,"3":[0,2,6,8,12,23],"4":[8,12],"50":25,"8":23,"8081":2,"8gb":1,"90":1,"abstract":[2,4,9,18,19,20,22],"byte":19,"case":[1,2,27],"class":[2,4,6,8,9,11,12,15,18,19,20,22,25,27],"default":[0,1,9],"do":[0,23],"enum":[6,8,12],"export":1,"final":27,"function":[25,27],"import":[25,27],"new":2,"return":[6,8,9,11,12,15,17,18,19,20,22,27],"true":[12,15,19,27],"try":[23,27],"while":0,A:[0,23,27],AND:27,AS:27,As:[2,27],By:[0,1],FOR:27,For:[0,2,23,27],IN:27,If:23,In:[1,2,27],It:[0,25],OF:27,Of:27,THAT:27,THE:27,TO:27,The:[0,1,22,23,25],Then:[0,1,2,27],There:[2,27],These:[2,27],To:[1,2,27],WITH:27,__future__:27,__main__:27,__name__:27,aa:23,ab:23,abc:[4,8,9,18,20,22],abl:[1,27],about:23,abov:27,access:1,accommod:0,accompish:27,account:25,accross:23,achiev:[0,1,23],across:1,act:27,activ:[0,1,9,23],actor:0,actual:27,ad:[1,25],add:[1,2,15],addi:23,addit:[0,1,23],address:1,addtion:2,advanc:2,after:[1,27],again:27,agent:0,aggreg:[0,1,3,23,24],aggregatorbas:[2,4],agnost:23,ait:23,alawadi:23,all:[2,23],allianc:[0,23],alloc:25,allow:[0,1,2,23,25],along:27,alreadi:[1,2],also:[0,1,2,27],amount:0,an:[0,1,2,6,8,12,22,27],andrea:23,ani:[0,23,27],ann:0,announc:12,anywher:0,apach:23,api:[0,1,2,25,27],appli:0,appreci:23,appropri:1,ar:[0,1,2,23,25,27],arbitrari:[2,27],architectur:[1,23,27],arg:22,argmax:27,argv:27,arrai:22,articl:23,artifici:0,arxiv:23,ask:23,assign:[2,9,12,25],assum:[1,2,27],assumpt:27,async:25,athor:27,author:23,avail:[1,23],averag:22,average_weight:22,axi:27,b:[0,1],back:[25,27],backbon:0,backend:1,base:[1,2,4,6,8,9,10,11,12,15,16,18,20,22,23,27],baseexcept:10,batch_siz:27,becom:27,been:[2,25,27],befor:[25,27],behavior:2,being:1,below:[0,1,27],benchmark:23,best:27,better:25,between:[0,1,2,27],binari:[2,22],bit:15,black:[2,23],blob:2,both:[23,27],box:[0,2,23],bucket:[8,19,25],bucket_nam:19,buffer:22,bug:25,bugfix:25,built:23,bundl:[25,27],bypass:2,bytesio:22,call:27,can:[0,1,27],captur:27,caus:25,central:1,cert:15,cert_nam:15,certif:[3,10],certificatemanag:[3,10],chang:[1,27],check_round_validity_polici:2,checksum:[3,24],choic:1,choos:25,cite:23,classification_report:27,clear:2,clf_report:27,client:[10,12,19,23,24,25],client_allocation_polici:2,client_allocation_policy_first_avail:2,client_allocation_policy_least_pack:2,client_data:9,clientstat:6,clientstatetostr:6,cloud:0,cmd_type:22,code:[0,2,25,27],collect:2,com:[2,25],combin:[2,5,9,12,23,24,25,27],combine_model:4,combiner_data:9,combinerhost:25,combinerport:25,command:27,commbin:27,commit:25,common:[3,24],commun:[1,25],compat:22,compil:27,complet:27,compon:1,compos:[1,23,25],compress:27,comput:[0,22,23,25],compute_bundle_dir:8,compute_packag:19,config:[1,3,5,9,11,17,19,22,25],configur:[0,1,25],connect:[0,1,3,10,27],connect_to_mongodb:17,connectorcli:12,connectorcombin:12,consid:23,consider:1,consist:1,constraint:2,construct:[0,25,27],contain:[1,27],container:27,content:24,control:[1,2,3,4,5,10],conveni:[25,27],conveninc:25,coordin:[0,23],copi:1,correctli:27,correspond:27,could:27,cours:27,cpu:1,creat:27,create_bucket:19,create_dir:15,create_seed_model:27,cross:23,current:[0,1,2,25,27],custom:0,cwd:[15,22],czvf:27,dahboard:27,dai:1,dashboard:25,data:[0,25],data_path:27,databas:[2,27],dataset:[0,27],db:[10,16],de:27,decentr:1,def:27,defin:[0,4,22,27],definit:[25,27],degener:1,delet:2,delete_artifact:19,delete_combin:9,delete_compute_context:19,delete_object:19,demonstr:27,depend:[1,25,27],deploi:0,deseri:[2,27],design:[0,1,23],desislava:23,detail:[0,23],develop:[0,23],devic:23,dict:27,dictat:0,dictionari:[9,27],differ:[0,1,27],differenti:2,dir:22,directori:[2,15],disallow:2,disconnect:12,discord:[23,25],discoveri:0,disk:22,dispatch:[3,11,24,25,27],displai:1,distribut:25,divid:23,doc:25,docker:[1,23,25,27],dockerfil:25,document:25,doe:[1,27],done:27,download:[11,25,27],drop_combiner_round:20,drop_combiner_round_tim:20,drop_control:9,drop_latest_model:20,drop_model:9,drop_model_trail:20,drop_mongodb:17,drop_ps_util_monitor:20,drop_round_tim:20,drop_statu:20,due:1,dump:27,dure:[0,2],dynam:1,e:[0,27],each:[0,1,27],easi:1,edg:0,edit:1,educ:27,effici:23,either:1,ekmefjord2021scal:23,ekmefjord:23,empti:25,enabl:[1,2],endpoint:[1,27],enforc:2,ensembl:0,ensur:25,enterpris:23,entir:2,entri:27,entry_point:27,entrypoint:[2,27],enumer:[6,8,12],environ:[1,23,27],environemnt:27,epoch:27,equal:27,error:12,etc:[1,25,27],evalu:27,evenli:25,event:[23,25],everyth:27,exampl:[0,1,2,23,25,27],except:[3,24,27],exect:27,execut:[0,25,27],exist:[1,18],expand:[1,2],expect:27,expected_checksum:11,expir:1,explain:27,explor:23,expos:[0,23],express:27,extend:2,extern:[1,25],extra:1,f:1,facilit:2,factor:1,fail:27,fals:[2,11,12,19,27],fashion:2,faster:25,fedavg:[0,2,3,24],feder:[2,23,25,27],fedml:0,fedn:[0,27],fedn_pb2:[10,12],fedn_pb2_grpc:[10,12],feel:25,fh:27,field:25,figur:[0,27],file:[1,2,22,23,25,27],file_path:22,filenam:9,fill:0,find:[15,23],firewal:1,first:[0,1,23,27],fit:27,flag:1,flavor:1,flexibl:1,flush:27,fname:22,fog:0,folder:27,follow:[0,1,2,23,27],form:[0,25],format:[25,27],found:27,framework:[23,25,27],frequent:23,from:[0,1,2,22,25,27],fucntion:27,full:23,fulli:1,funcion:27,futur:2,g:[0,27],gen_keypair:15,gener:[0,1],geograph:1,get:[0,18,25,27],get_artifact:19,get_artifact_stream:19,get_cert:15,get_client:9,get_combin:9,get_compute_context:9,get_compute_packag:19,get_config:9,get_ev:9,get_first:9,get_framework:9,get_help:22,get_kei:15,get_keypair_raw:15,get_latest:9,get_latest_round:20,get_meta:18,get_model:19,get_model_info:9,get_model_stream:19,get_or_cr:15,get_ptr:18,get_reduc:9,get_round_config:9,get_storage_backend:9,get_tmp_path:22,get_weight:[22,27],github:[2,25],given:1,global:[0,27],go:25,good:[0,23],group:1,grow:0,grpc:[0,1,10,12],guid:25,guidelin:[23,27],gz:27,ha:[2,23,27],handl:[0,1,2,27],happen:[0,2],hard:25,hardwar:0,harmon:25,have:[1,23,25,27],helland:23,help:[0,2,23],helper:[2,3,4,9,24,25,27],helper_typ:22,helperbas:22,henc:[0,25],here:27,heterogen:23,hierarch:23,hierarchi:[25,27],high:23,highli:[0,1],hold:0,home:22,horizont:[0,23],host:[11,12],hostnam:1,how:[0,1,27],howev:[1,2,27],http:[2,23,25],hyper:27,hyper_paramet:27,i:25,id:[4,12],identifi:1,idl:[6,8],illustr:[0,27],imag:25,immut:[0,2],implement:[0,2,23,27],importantli:0,improv:25,includ:[0,1,23,25,27],incompat:1,incorpor:23,increment:22,increment_averag:22,independ:[0,27],index:[22,26],individu:[0,27],inform:23,ingress:[0,1,23],init:1,init_model:27,initi:27,initial_model:[8,27],initil:2,input:[2,27],instanc:[2,19,22],instance_nam:19,instead:[25,27],instruct:[1,8,23,27],integr:0,inter:2,interact:[0,2,27],interest:23,interfac:[3,5,27],intiti:2,introduc:25,ip:1,is_fil:19,is_init:9,issu:23,iter:22,job:25,journal:23,json:[2,27],just:25,k8:27,kei:[1,15,23,27],kera:[22,23,25,27],kerashelp:[2,3,24,27],kesson:23,key_nam:15,kill:2,know:2,lai:0,laid:0,languag:0,larg:23,latest:[9,25,27],latter:27,layout:25,learn:23,least:1,let:[2,23],level:[0,2,27],librari:27,like:[19,25,27],list_artifact:19,list_client:9,list_combin:9,load:22,load_al:15,load_model:[22,27],load_model_from_bytesio:22,local:[0,25,27],localhost:2,locat:[1,27],log_level:22,logger:[3,24],logic:[0,25,27],longer:25,look:[25,27],lookup:1,lot:25,machin:23,made:[0,27],main:[2,27],maintain:[0,23,27],make:[0,1,2,27],manag:[23,25],mani:[0,1,23,25,27],map:1,massiv:23,master:2,mattia:23,max_client:25,maximum:25,md5:22,mean:[0,23,27],mechan:0,mediat:0,meet:0,memori:25,memorymodelstorag:[10,16],mention:27,messag:2,method:2,metric:[25,27],might:1,minio:25,miniorepo:[10,16],miniorepositori:19,ml:[23,27],mlouk:23,mnist:[23,25,27],mnist_model:27,model:[0,1,2,8,9,10,16,19,22,23,25,27],model_bytesio:22,model_id:[4,9,18,19],model_in:27,model_metadata:18,model_next:22,model_out:27,model_scor:27,model_score_test:27,model_trail:9,model_update_in:2,model_update_out:2,modelerror:10,models_dir:8,modelservic:[3,4,5],modelstorag:[10,16],modif:27,modifi:[1,2],modul:[24,26],modular:23,mongo:[1,10,16,27],mongo_config:20,mongodb:27,mongoreducerstatestor:[5,8],mongotrac:[3,10],monitor:[8,23,25],more:[0,2,23,25],morgan:23,most:[0,2,27],mount:27,msg:20,much:23,multiparti:2,multipl:[1,23],must:[19,22],myhost:12,myport:12,n:22,name:[1,9,11,12,15,19,25],nativ:27,natur:2,navig:2,necessari:[1,2,27],need:[0,1,27],net:[3,10],network:[0,2,3,5,23,25,27],network_id:[9,17,20],neural:[0,27],node:[0,1],none:[4,8,9,11,12,15,19,20,22],note:[1,2,23,27],now:[1,25],np:27,npz:[22,25,27],nr_expected_model:4,nr_required_model:4,number:[0,1,25],numpi:[22,27],numpyarrayhelp:[3,24],ob:27,object:[11,12,15,19,22],observ:27,obtain:[1,27],off:25,ola:23,on_model_upd:4,on_model_valid:4,onc:[1,2,27],one:[0,1,22,23,27],onli:[0,27],onlin:25,open:[0,1,27],openssl:1,oper:[2,27],optain:27,optim:1,option:2,orchestr:0,org:23,os:27,other:[1,23],our:23,out:[0,2,23],outcom:0,outfile_nam:27,output:[1,2,9,22,27],over:[0,25],overal:0,overview:[23,27],own:[2,25],packag:[23,24,25],package_dir:11,package_path:11,packageruntim:11,page:26,pair:27,paper:23,param:27,paramet:[0,2,6,8,9,11,15,17,18,19,20,22,25,27],part:2,particip:27,particular:27,password:1,patch:25,path:[22,27],pattern:[0,23],pem:15,perform:[2,23,25,27],persist:25,phase:25,phrase:1,pictur:0,plan:[0,1],pleas:[2,23],plot:[3,5,25,27],point:[25,27],polici:25,port:[0,1,11,12,23],possibl:[0,1,23,25,27],povid:27,practic:27,predict:27,prefer:27,preprint:23,prereq:25,present:27,preshared_cert:12,pretrain:27,prevent:25,previou:25,previous:25,principl:27,print:27,print_funct:27,prior:[0,25],priorit:2,privat:0,privatekei:15,procedur:2,process:[2,3,24],product:[2,23,25],program:[0,27],progress:23,project:[2,27],propereti:1,proport:0,protocol:[0,2],proven:23,provid:[0,1,2,23,27],proxim:1,ps_util_monitor:20,pseudo:[1,23],pull:23,pure:2,purpos:[0,27],put:27,py:[2,27],python3:0,python:[23,27],pytorch:[22,23,25],pytorchhelp:[2,3,24],queri:27,question:23,quickest:23,r:27,rais:27,ram:1,reach:[1,23],read:[0,27],read_data:27,readi:27,real:23,reattach:2,receiv:0,recent:23,reciev:27,recommend:[1,27],record:9,reduc:[2,5,24,25,27],reducer_data:9,reducerconfig:8,reducerst:8,reducerstatestor:[5,8],reducerstatetostr:8,redund:1,refactor:25,refer:[1,2,23],refresh:25,reiniti:2,rel:27,relat:25,releas:[2,23],rememb:1,remote_packag:12,repeat:1,report:[20,27],repositori:[19,25],request:[0,23,27],requir:[0,1,27],research:23,resid:25,resolut:1,resolv:1,respons:0,rest:0,restservic:[3,5],result:0,resum:25,right:25,role:[0,9],root:1,roughli:27,round:[0,20,25],round_meta:20,round_tim:20,roundcontrol:[3,5],routin:2,rpc:[0,1],rtype:27,run:[0,1,2,25],run_cmd:22,run_path:11,run_process:22,runner:22,runtim:2,s3:[8,10,16,25],s3modelrepositori:19,s3repo:[10,16],s:[1,27],sadi:23,safe_load:27,salman:23,same:[1,27],save:[22,27],save_model:[22,27],scalabl:[0,23],scalar:27,scale:[0,1,23],scaleoutsystem:[2,25],scenario:23,scheme:0,scikit:23,score:27,sdk:[23,27],search:26,second:1,secret:1,secur:[1,2,3,10,12,23,25],see:[1,2,23,27],seed:[2,27],seeen:2,select:25,self:2,send:27,sens:[0,2],separ:[1,25],sequenc:22,sequenti:22,serial:[2,22,27],serializaion:27,serialize_model_to_bytesio:22,serv:1,server:[0,1,4,10,12,23,25],set:[1,8,9,23,25,27],set_artifact:19,set_client:9,set_combin:9,set_combiner_tim:20,set_compute_context:[9,19],set_framework:9,set_keypair_raw:15,set_latest:9,set_latest_tim:20,set_meta:18,set_model:19,set_reduc:9,set_round_config:9,set_round_meta:20,set_round_meta_reduc:20,set_storage_backend:9,set_weight:[22,27],setup:[8,25],sever:25,sgd:0,should:[2,27],show:[1,23],shown:25,side:0,silo:23,similar:27,simpl:[0,1],simpli:27,sinc:1,singl:[0,1,22,27],siso:2,size:1,skip:1,sklearn:27,slightli:1,small:27,so:[1,25],softwar:0,some:[1,27],sourc:[4,6,8,9,10,11,12,15,17,18,19,20,22],specif:27,specifi:[0,1],spjuth:23,spread:25,stabil:25,stage:27,standard:[0,1,2],stare:0,start:[0,1,25,27],start_monitor:20,state:[0,3,5,9,12,25],statestor:[5,8],statu:[9,12,25],step:[1,27],stop_monitor:20,storag:[3,4,10],storage_backend:8,stoyanova:23,str:22,strategi:0,stream:2,stringtoreducerst:8,structur:27,submit:25,submodul:[5,16,24],subpackag:24,subscib:2,subsystem:0,sudo:1,support:[0,25],sure:1,svm:0,sy:27,system:0,tag:1,take:27,taken:27,tar:27,target:[0,1],templat:[1,25],tempmodelstorag:[10,16],temporari:22,tensoflow:27,test:[2,3,24,25,27],test_accuraci:27,test_loss:27,test_reducer_servic:[3,24],thei:[0,25],them:1,thereof:2,thi:[0,1,2,23,25,27],those:27,thousand:23,three:[0,1],through:[25,27],thu:[0,27],time:[23,25],timelin:0,timeout:[4,25],titl:23,to_dict:9,to_fil:22,toggl:2,token:[11,12],toor:23,topolog:1,total:0,tracer:[3,10],track:23,trail:0,train:[0,1,6,23,25,27],trainer:[2,9],training_accuraci:27,training_loss:27,trainset:27,trane:27,transit:9,treat:23,trigger:0,tryagain:12,tutori:23,two:[0,1],type:[0,2,8,22,23,27],typic:27,ubuntu:1,ui:[23,25,27],unassign:12,unauthor:12,under:[1,23],understand:23,uniqu:[0,1],unmatchedconfig:12,unpack:[11,27],unseen:2,unsign:1,untrain:27,up:[0,1,23,27],updat:[0,2,9,22,23,25,27],update_client_statu:9,upgrad:25,upload:[2,11,25,27],upon:[0,27],us:[0,1,23,25,27],user:[0,1,2,25,27],util:[2,3,24,27],valid:[0,4,6,9,11,23,25,27],valu:[0,6,8,12,27],vari:0,variabl:[2,27],variant:2,varieti:0,variou:0,verbos:27,veri:27,verify_cert:12,version:25,via:[1,27],view:[0,25],virtual:23,visual:23,vm:1,w:27,wai:[1,2,23,27],walk:27,we:[1,2,23,27],web:[10,12],weight:[22,27],weights_:22,weights_dict:22,weights_next:22,well:[0,1,2],when:[0,1,27],where:[0,2,27],which:[1,2,23,25,27],whoallah:25,whose:0,wiwmethod:2,work:[0,2,22,23,27],world:23,write:[0,27],x_test:27,x_train:27,y_pred:27,y_test:27,y_train:27,yaml:[1,2,27],yamlerror:27,ye:2,year:23,yet:2,you:[1,23,25,27],your:[1,2,23,25,27],your_data:27},titles:["Architecture overview","Distributed deployment","Frequently asked questions","fedn package","fedn.aggregators package","fedn.clients package","fedn.clients.client package","fedn.clients.combiner package","fedn.clients.reducer package","fedn.clients.reducer.statestore package","fedn.common package","fedn.common.control package","fedn.common.net package","fedn.common.net.grpc package","fedn.common.net.web package","fedn.common.security package","fedn.common.storage package","fedn.common.storage.db package","fedn.common.storage.models package","fedn.common.storage.s3 package","fedn.common.tracer package","fedn.tests package","fedn.utils package","Welcome to FEDn documentation","fedn","Release Notes","SDK Documentation","Tutorial: Compute Package"],titleterms:{"0":25,"1":[1,25],"2":[1,25],"3":[1,25],"4":[1,25],"5":25,"do":2,"new":25,The:27,access:27,addit:2,aggreg:[2,4],algorithm:[0,2],architectur:0,ask:2,attach:1,authent:1,averag:0,base:19,can:2,certif:[1,15],certificatemanag:15,checksum:22,citat:23,client:[0,1,2,3,5,6,7,8,9,14,27],collabor:23,combin:[0,1,3,7],common:[10,11,12,13,14,15,16,17,18,19,20],commun:[0,23],compon:0,comput:[2,27],config:8,configur:2,connect:12,content:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],contribut:23,contributor:23,control:[0,8,11],core:23,data:27,db:17,defin:2,deploi:1,deploy:[1,23],design:27,develop:2,dispatch:22,distribut:[1,23],dn:1,document:[23,26],etc:2,except:10,featur:23,fedavg:4,feder:0,fedn:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],fedn_pb2:13,fedn_pb2_grpc:13,fetch:2,fix:25,flow:0,folder:2,framework:2,frequent:2,from:23,get:23,go:23,grpc:13,helper:22,here:23,hierarch:0,host:1,how:2,i:2,includ:2,instead:2,interfac:8,kerashelp:22,licens:23,like:2,listen:2,local:2,logger:22,main:0,make:23,mechan:2,memorymodelstorag:18,minio:1,miniorepo:19,ml:2,model:18,modelservic:7,modelstorag:18,modul:[3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],mongo:17,mongodb:1,mongoexpress:1,mongoreducerstatestor:9,mongotrac:20,more:27,need:2,net:[12,13,14],network:[1,8],note:25,numpyarrayhelp:22,onli:2,option:1,organiz:23,other:[2,25],overview:0,packag:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,27],particip:2,plan:2,plot:8,polici:2,prerequisit:[1,23],preserv:2,privaci:2,process:22,pytorchhelp:22,q:2,question:2,quick:23,reduc:[0,1,3,8,9],reducerstatestor:9,releas:25,remot:2,remov:2,replac:2,request:2,restservic:8,round:2,roundcontrol:7,run:27,s3:19,s3repo:19,s:25,sdk:26,secur:15,server:13,servic:[0,1],skip:2,sklearn:2,start:[2,23],state:[6,8],statestor:9,storag:[16,17,18,19],submodul:[3,4,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,22],subpackag:[3,5,8,10,12,16],support:[1,2,23],tempmodelstorag:18,test:21,test_reducer_servic:21,token:1,tracer:20,train:2,tutori:27,us:2,util:22,v0:25,valid:2,web:14,welcom:23,what:[2,25],when:2,where:23,xgboost:2,you:2}})