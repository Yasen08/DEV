<template>
    <div class="soldetail">
        <smallbanner></smallbanner>
        <position :positionList="positionList"></position>
        <div class="soldetail-box">
            <div class="soldetail-left">
                <div class="navleft">
                    <div class="navleft-box">
                        <div class="navleft-item">
                            <router-link :to="navleftlist.homeUrl">
                            <div class="item-first">
                                        <div class="first-img">
                                            <img :src="navleftlist.iconurl" width="34px" height="34px">
                                        </div>
                                        <p>{{navleftlist.title}}</p>
                            </div>
                            </router-link>
                            <router-link 
                            v-for="(item,index) in navleftlist.list" :key="index"
                            :to="{path: `${item.path}=` + item.id}"
                            class="item-other"
                            :class="[select === item.id ?'active' : '']"
                            >
                            <p>{{item.txt}}</p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="soldetail-right">
                <div class="soldetail-item">
                    <!-- 移动政务 -->
                    <ul class="item-box" :class="[select == 'move' ?'show' : 'hidden']">
                        <li class="item-dot">
                            <div class="item-title">
                                相关应用
                            </div>
                            <div class="text-box">
                            <div class="dot-text">
                                警务通
                            </div>
                            <div class="dot-text">
                                交警执法
                            </div>
                            <div class="dot-text end">
                                城管执法
                            </div>
                            <div class="dot-text">
                                工商、卫生监督
                            </div>
                            <div class="dot-text">
                                烟草稽查
                            </div>
                            <div class="dot-text end">
                                现场勘察
                            </div>
                            <div class="dot-text">
                                酒精检测
                            </div>
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                挑战与需求
                            </div>
                            <div class="article-box">
                                政府部门行使执法权时，在开具手写执法文书过程中，不但耗费时间，还会经常出现字迹难辨、书写笔误、涂改甚至私自撤销等有损政府形象的情况，降低了公信力。
                            </div>
                        </li>
                        <li class="item-circle">
                             <div class="item-title">
                                政府部门移动执法解决方案
                            </div>
                            <div class="circle-box">
                                <div class="circle-item"><p class="circle-txt">检查</p></div>
                                <div class="circle-item"><p class="circle-txt">告知</p></div>
                                <div class="circle-item"><p class="circle-txt">录入</p></div>
                                <div class="circle-item"><p class="circle-txt">打印</p></div>
                                <div class="circle-item1"><p class="circle-txt">缴纳</p></div>
                            </div>
                        </li>
                        <li class="item-dot">
                            <div class="item-title">
                                客户收益
                            </div>
                            <div class="text-box">
                            <div class="dot-text">
                                规范执法文书
                            </div>
                            <div class="dot-text">
                                降低出错率
                            </div>
                            <div class="dot-text">
                                提高执法文书的严肃性
                            </div>
                            <div class="dot-text">
                                提高执法效率
                            </div>
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                典型应用客户
                            </div>
                            <div class="article-box margin-bottom18">
                                国家卫生部移动监督项目 —— 现场打印执法文书
                            </div>
                            <div class="article-box margin-bottom18">
                                上海市交警移动警务系统 —— 现场打印违章处罚单
                            </div>
                            <div class="article-box margin-bottom18">
                                海南省公安移动警务系统 —— 现场打印违章处罚单
                            </div>
                            <div class="article-box margin-bottom18">
                                广州市公安移动警务系统 —— 现场打印违章处罚单
                            </div>
                        </li>
                    </ul>
                    <!-- 快递物流 -->
                    <ul class="item-box" :class="[select == 'expressage' ?'show' : 'hidden']">
                        <li class="item-dot">
                            <div class="item-title">
                                相关应用
                            </div>
                            <div class="text-box">
                            <div class="dot-text">
                                快递企业
                            </div>
                            <div class="dot-text">
                                运输行业
                            </div>
                            <div class="dot-text end">
                                邮寄
                            </div>
                            <div class="dot-text">
                                包裹
                            </div>
                            <div class="dot-text">
                                货物标签
                            </div>
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                挑战与需求
                            </div>
                            <div class="article-box">
                                当今物流行业面临的一个突出问题是如何降低商品在流通环节中的物流成本。由于商品在从制造商传送到顾客手中的整个物流过程中，分布在城市各个角落的收货点日益成为商品物流的一个重要环节，其运营成本在整个物流成本所占的比例越来越大。
                                <br>
                                济强的便携式票据打印机和便携式标签打印机能有效降低收货点的经营成本，提高收货点的经营效益。 
                            </div>
                        </li>
                        <li class="item-circle">
                             <div class="item-title">
                                政府部门移动执法解决方案
                            </div>
                            <div class="circle-box">
                                <div class="circle-item"><p class="circle-txt">揽件</p></div>
                                <div class="circle-item"><p class="circle-txt">打印<br>标签</p></div>
                                <div class="circle-item"><p class="circle-txt">分拣<br>中心</p></div>
                                <div class="circle-item"><p class="circle-txt">重新<br>包装</p></div>
                                <div class="circle-item1"><p class="circle-txt">送货</p></div>
                            </div>
                        </li>
                        <li class="item-dot">
                            <div class="item-title">
                                客户收益
                            </div>
                            <div class="text-box">
                            <div class="dot-text">
                                标识货件
                            </div>
                            <div class="dot-text">
                                便于清点
                            </div>
                            <div class="dot-text">
                                追踪溯源
                            </div>              
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                典型应用客户
                            </div>
                            <div class="article-box margin-bottom18">
                               德邦快递 —— 打印快递发票
                            </div>
                            <div class="article-box margin-bottom18">
                                韵达快递 —— 打印快递发票
                            </div>
                            <div class="article-box margin-bottom18">
                                中通快递 —— 打印快递发票
                            </div>
                            <div class="article-box margin-bottom18">
                                百世快递 —— 打印快递发票
                            </div>
                        </li>
                    </ul>
                    <!-- 金融保险 -->
                    <ul class="item-box" :class="[select == 'financial' ?'show' : 'hidden']">
                        <li class="item-dot">
                            <div class="item-title">
                                相关应用
                            </div>
                            <div class="text-box">
                            <div class="dot-text">
                                车险快速定损
                            </div>
                            <div class="dot-text">
                                信用卡现场办理
                            </div>
                            <div class="dot-text end">
                                保单确认
                            </div>
                            <div class="dot-text">
                                车险现场定损
                            </div>
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                挑战与需求
                            </div>
                            <div class="article-box">
                                目前保险车辆激增，处理事故和定损工作时间相应增长，对拥有丰富经验和专业技能的定损人员的需求量也相应激增。由于高素质专业人才较少、路途远且地段分散等等原因，致使业务管理效率、业务管控力度、客户满意度等方面都受到一定的影响。同时保险公司对于分散的保险定损点和车辆维修点的工作情况和工作秩序情况无法进行实时监控和管理。
                            </div>
                        </li>
                        <li class="item-circle">
                             <div class="item-title">
                                车险定损解决方案
                            </div>
                            <div class="circle-box">
                                <div class="circle-item"><p class="circle-txt">现场<br>勘查</p></div>
                                <div class="circle-item"><p class="circle-txt">查询<br>费用</p></div>
                                <div class="circle-item"><p class="circle-txt">确认<br>费用</p></div>
                                <div class="circle-item"><p class="circle-txt">签署<br>理赔单</p></div>
                                <div class="circle-item1"><p class="circle-txt">完成<br>理赔</p></div>
                            </div>
                        </li>
                        <li class="item-dot">
                            <div class="item-title">
                                客户收益
                            </div>
                            <div class="text-box">
                            <div class="dot-text width100">
                                从根源减少虚假赔案发生，降低理赔成本
                            </div>
                            <div class="dot-text width100">
                                提升专业理赔服务形象，缩短理赔审核周期，提升客户满意度
                            </div>
                            <div class="dot-text width100">
                                使理赔工作规范、标准、透明，减少了灰色空间
                            </div>              
                            <div class="dot-text width100">
                                提高了现场定损的百分比
                            </div>              
                            <div class="dot-text width100">
                                有利于统一定损标准
                            </div>              
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                典型应用客户
                            </div>
                            <div class="article-box margin-bottom18">
                               中国大地财产保险股份有限公司 —— 现场打印车险定损单
                            </div>
                            <div class="article-box margin-bottom18">
                                信达财产保险股份有限公司 —— 现场打印车险定损单
                            </div>
                        </li>
                    </ul>
                    <!-- 仓储管理 -->
                    <ul class="item-box" :class="[select == 'warehouse' ?'show' : 'hidden']">
                        <li class="item-dot">
                            <div class="item-title">
                                相关应用
                            </div>
                            <div class="text-box">
                            <div class="dot-text">
                                仓库库存
                            </div>
                            <div class="dot-text">
                                仓库盘点
                            </div>
                            <div class="dot-text end">
                                仓库调拨
                            </div>
                            <div class="dot-text">
                                出入库管理
                            </div>
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                挑战与需求
                            </div>
                            <div class="article-box">
                                对于大型连锁零售企业的仓储管理而言，传统管理方式主要是人工手动记账进行库存盘点，操作工作量大且繁琐，耗时长，而且人为因素导致盘点数据不准确，错盘、漏盘等情况时有发生，而传统的盘点无法实时传输数据共享，进行库存差异对比，导致管理难度加大。如何利用信息技术解决仓储盘点耗时长，准确率低的难题，成为大型仓储业的一大挑战。
                            </div>
                        </li>
                        <li class="item-circle">
                             <div class="item-title">
                                仓储管理解决方案
                            </div>
                            <div class="circle-box">
                                <div class="circle-item"><p class="circle-txt">入库</p></div>
                                <div class="circle-item"><p class="circle-txt">移库</p></div>
                                <div class="circle-item"><p class="circle-txt">盘点</p></div>
                                <div class="circle-item"><p class="circle-txt">出库</p></div>
                                <div class="circle-item1"><p class="circle-txt">确认</p></div>
                            </div>
                        </li>
                        <li class="item-dot">
                            <div class="item-title">
                                客户收益
                            </div>
                            <div class="text-box">
                            <div class="dot-text width368">
                                盘点
                            </div>
                            <div class="dot-text width368">
                                发货  
                            </div>
                            <div class="dot-text end1">
                                提升员工效率
                            </div>              
                            <div class="dot-text width368">
                                及时补货
                            </div>              
                            <div class="dot-text width368">
                                收货
                            </div>              
                            <div class="dot-text end1">
                                整理存放
                            </div>              
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                典型应用客户
                            </div>
                            <div class="article-box margin-bottom18">
                               优速快递 —— 仓库货物盘点、分拨
                            </div>
                            <div class="article-box margin-bottom18">
                                一米滴答 —— 仓库货物盘点、分拨
                            </div>
                            <div class="article-box margin-bottom18">
                                盒马鲜生 —— 仓库货物运转签
                            </div>
                        </li>
                    </ul>
                    <!-- 零售商超 -->
                    <ul class="item-box" :class="[select == 'retail' ?'show' : 'hidden']">
                        <li class="item-dot">
                            <div class="item-title">
                                相关应用
                            </div>
                            <div class="text-box">
                            <div class="dot-text">
                                超市
                            </div>
                            <div class="dot-text">
                                专卖店
                            </div>
                            <div class="dot-text end">
                                流动售货
                            </div>
                            <div class="dot-text">
                                更改价签
                            </div>
                            <div class="dot-text">
                                商品配送单
                            </div>
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                挑战与需求
                            </div>
                            <div class="article-box">
                                商业的繁荣使大型商场成为现代化城市的一个缩影，逛商场已成为城市居民生活中必不可少的一项内容。假日是零售业的销售旺季，各大商场的促销、店庆等活动层出不穷。这段期间的销售额会激增至平时的好几倍，各零售商对顾客的争抢也日益激烈，在顾客服务上不遗余力。但是，大量顾客的涌入，很容易导致产品信息的混乱，如价格标签遗失等。此外，如果举行促销活动，新旧标签的混淆也是一个长期存在的问题，甚至会引起消费者的投诉。因此，如何及时响应客户的服务需求并确保商品信息准确性是大型商场及其门店管理的一大挑战。
                            </div>
                        </li>
                        <li class="item-dot">
                            <div class="item-title">
                                客户收益
                            </div>
                            <div class="text-box">
                            <div class="dot-text width368">
                                获取正确的价格
                            </div>
                            <div class="dot-text width368">
                                及时调整价格标签货   
                            </div>
                            <div class="dot-text end1">
                                提升员工效率
                            </div>              
                            <div class="dot-text width368">
                                及时补货
                            </div>              
                            <div class="dot-text width368">
                                高效实现顾客分流
                            </div>             
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                典型应用客户
                            </div>
                            <div class="article-box margin-bottom18">
                                美特斯邦威 —— 打印价格标签；B2C物流配送票据
                            </div>
                            <div class="article-box margin-bottom18">
                                盒马鲜生 —— 货物配送确认单
                            </div>
                            <div class="article-box margin-bottom18">
                                京东7 FRESH —— 货物配送确认单
                            </div>
                        </li>
                    </ul>
                    <!-- 水电抄表 -->
                    <ul class="item-box" :class="[select == 'water' ?'show' : 'hidden']">
                        <li class="item-dot">
                            <div class="item-title">
                                相关应用
                            </div>
                            <div class="text-box">
                            <div class="dot-text" style="width:344px">
                                水费缴费通知单
                            </div>
                            <div class="dot-text" style="width:344px">
                                电费缴费通知单
                            </div>
                            <div class="dot-text" style="width:252px">
                                煤气费缴费通知单
                            </div>
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                挑战与需求
                            </div>
                            <div class="article-box">
                                传统的电力抄表采用手工操作，使用纸张作为记录信息的载体，工作效率低下，资源浪费严重。且手工操作工作量大，既费时又费力，计算机手工录入又容易出错。对于水电公司来讲如何管理水电表、回收水电费，是水电公司稳定运营的重要保障。抄表信息电子化，抄表人员到居民住所将水电表上的数据自动录入抄表机，由抄表机计算后将数据发送到随身携带的打印机，这样大大提高了工作效率。
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                解决方案
                            </div>
                            <div class="article-box">
                                面对这一需求，上海济强电子科技有限公司，凭借多年来专注定制移动应用解决方案和便携打印设备的强大技术积累，在这里为水电抄表同步管理领域提供高效、稳定的技术解决方案。
                                <br>
                                济强打印机结合现代电子信息技术和市政管理部门的抄表管理要求,抄表的同事通过济强便携式票据打印机现场打印缴费单，既节省了时间又节省资源，提高了抄表效率，是解决水电气抄收工作瓶颈的最佳方案。
                            </div>
                        </li>
                        <li class="item-dot">
                            <div class="item-title">
                                现场打印水电缴费单的优势
                            </div>
                            <div class="text-box">
                            <div class="dot-text width100">
                                提高工作效率：携带方便操作简单，抄表员只需将本次表读数输入机器即可。
                            </div>
                            <div class="dot-text width100">
                                快速查询智能化：瞬时定位用户，瞬时自动计算统计水电气量、水电气费。
                            </div>
                            <div class="dot-text width100">
                                自动同步，现场打票：自动同步数据，现场将缴费单交给用户，节省投递费用。
                            </div>              
                            <div class="dot-text width100">
                                业主在抄表的同时拿到缴费通知单，当场进行数据核对，避免纠纷。
                            </div>              
                            <div class="dot-text width100">
                                减少资金回笼所需要的时间。
                            </div>              
                            <div class="dot-text width100">
                               若业主没有收到或遗失缴费通知单，或是忘记缴费，可以在下次抄表时再次打印缴费单并现场催缴。
                            </div>              
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                典型应用客户
                            </div>
                            <div class="article-box margin-bottom18">
                                上海燃气集团有限公司 —— 抄表缴费通知单
                            </div>
                            <div class="article-box margin-bottom18">
                                宁波自来水有限公司 —— 抄表缴费通知单
                            </div>
                            <div class="article-box margin-bottom18">
                                宁波自来水有限公司 —— 抄表缴费通知单
                            </div>
                        </li>
                    </ul>
                    <!-- 资产盘点 -->
                    <ul class="item-box" :class="[select == 'property' ?'show' : 'hidden']">
                        <li class="item-dot">
                            <div class="item-title">
                                相关应用
                            </div>
                            <div class="text-box">
                            <div class="dot-text">
                                固定资产标识
                            </div>
                            <div class="dot-text">
                                非固定资产标识
                            </div>
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                挑战与需求
                            </div>
                            <div class="article-box">
                                固定资产具有价值高、地点分散、管理难度大等特点，给盘点带来极大的困难。使用济强便携式标签打印机，可以对固定资产边盘点边粘贴条形码，使盘点速度和准确率提高90%以上。
                            </div>
                        </li>
                    </ul>
                    <!-- mops -->
                    <ul class="item-box" :class="[select == 'mpos' ?'show' : 'hidden']">
                        <li class="item-dot">
                            <div class="item-title">
                                相关应用
                            </div>
                            <div class="text-box">
                            <div class="dot-text">
                                小微商户
                            </div>
                            <div class="dot-text">
                                收单行业(签购单打印)
                            </div>
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                挑战与需求
                            </div>
                            <div class="article-box">
                                mPOS是一个整体概念，包括终端设备和相关应用。具体指，通过移动通讯设备(含所搭载的支付应用软件)进行商户收银操作，由外接专用受理终端完成银联卡相关信息的采集和加密，通过移动通讯设备与后台处理系统交互完成交易，这一过程涉及的前端专用软硬件设备总称即为mPOS。<br>
                                以移动设备为中心进行POS交易的规模正在世界范围内快速增长，零售商和消费者都将越来越多的接受来自移动端的交易支付。 商店只要有智能型手机，或是平板电脑，就可提供消费者完成刷卡交易，不需要再装设传统刷卡机。国内调查机构第一调研最近发布了一份关于mpos刷卡消费使用态度的调查报告，报告显示在mpos使用过程中，消费者刷卡消费最关注的问题有安全问题、操作问题。76%的受访对象认为纸质签购单更安全便捷，交易过程中希望得到纸质签购单。
                            </div>
                        </li>
                        <li class="item-circle">
                             <div class="item-title">
                                解决方案
                            </div>
                            <div class="circle-box">
                                <div class="circle-item"><p class="circle-txt">打开<br>客户端</p></div>
                                <div class="circle-item"><p class="circle-txt">输入<br>信息</p></div>
                                <div class="circle-item"><p class="circle-txt">刷卡<br>付款</p></div>
                                <div class="circle-item1"><p class="circle-txt">核验<br>签单</p></div>
                            </div>
                        </li>
                        <li class="item-dot">
                            <div class="item-title">
                                功能优势
                            </div>
                            <div class="text-box">
                            <div class="dot-text">
                                操作简单使用便捷
                            </div>
                            <div class="dot-text">
                                签单管理方便
                            </div>
                            <div class="dot-text">
                                符合安全管理标准
                            </div>
                            <div class="dot-text">
                                费用较传统pos低
                            </div>
                            </div>
                        </li>
                    </ul>
                    <!-- 其他行业应用 -->
                    <ul class="item-box" :class="[select == 'else' ?'show' : 'hidden']">
                        <li class="item-text">
                            <div class="item-title">
                                移动售票(补票)
                            </div>
                            <div class="article-box">
                                节假日时，交通运输部门会面临强大的售票压力，使用济强便携式票据打印机可以承担起如临时售票、车上补票等任务。
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                仪表数据打印
                            </div>
                            <div class="article-box">
                                在很多领域，如研发、实验室、巡检等，都需要把仪器测量的结果随时打印出来。济强便携式票据打印机提供了可靠的打印方案。
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                工程监控和验收
                            </div>
                            <div class="article-box">
                               在某些工作中，人员的工作质量尤其重要，关乎到整个工程能否达到合格标准。使用济强便携式票据打印机，可以每天验收和记录工作人员的工作进度和质量，监控工程进度。
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                停车收费票据
                            </div>
                            <div class="article-box">
                                在路边临时停车场地，如何确认车辆停放的时间以及统计每天的收费是件麻烦的事。使用济强便携式票据打印机可很好的解决这些问题。
                            </div>
                        </li>
                        <li class="item-text">
                            <div class="item-title">
                                银行交割单
                            </div>
                            <div class="article-box">
                                银行业在运钞交接时，手续十分繁琐，而使用济强便携式票据打印机，运钞人员可以快速和银行营业点确认交接金额、地点、时间，并通过数据系统可以即时监测。
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Navleft from "../../components/navleft/navleft.vue"
import Position from "@/components/position/position.vue"
import Smallbanner from "../../components/smallbanner/smallbanner.vue"

export default {
    components:{
       Navleft,
       Position,
       Smallbanner
    },
    data(){
        return{
            positionList:[
                {title:'解决方案',url:'/solution'}
            ],
            select:'move',
            navleftlist:{
                homeUrl:'/solution',
                iconurl:require("@/assets/image/jiejuefangan.png"),
                title:"解决方案",
                list:[
                    {txt:"移动政务",path:"/solution/soldetail?type",id:"move"},
                    {txt:"快递物流",path:"/solution/soldetail?type",id:"expressage"},
                    {txt:"金融保险",path:"/solution/soldetail?type",id:"financial"},
                    {txt:"仓储管理",path:"/solution/soldetail?type",id:"warehouse"},
                    {txt:"零售商超",path:"/solution/soldetail?type",id:"retail"},
                    {txt:"水电抄表",path:"/solution/soldetail?type",id:"water"},
                    {txt:"资产盘点",path:"/solution/soldetail?type",id:"property"},
                    {txt:"mpos",path:"/solution/soldetail?type",id:"mpos"},
                    {txt:"其他行业应用",path:"/solution/soldetail?type",id:"else"}
                ],
                },
        }
    },
    methods:{

    },
    created(){
        this.select = this.$route.query.type
        // this.positionList += this.$route.query.type
        // var obj = {
        //     title:this.select,
        //     url:this.$route.fullPath
        // }
        // console.log(this.$route)
        // this.positionList.push(obj)
    }
}
</script>

<style lang="scss" scoped>
    /deep/.first-img img{
            width: 20px;
            height: 27px;
    }
    /deep/.first-img {
        margin-right: 20px!important;
        margin-top: 36px!important;
    }
    .soldetail-box{
        width: 1280px;
        margin: 0 auto;
        padding-top: 40px;
        display: flex;
        .soldetail-left{
            height: 100%;
        }
        .soldetail-right{
            margin-left: 60px;
            width: 940px;
            .soldetail-item{
                margin-bottom: 60px;
                .item-dot{
                    margin-bottom: 5px;
                    .text-box{
                        display: flex;
                        flex-wrap: wrap;
                        .dot-text{
                            width: 391px;
                            font-size: 20px;
                            line-height: 35px;
                            position: relative;
                            text-indent: 60px;
                            margin-bottom: 20px;
                        }
                        .dot-text::after{
                            content: "";
                            display: block;
                            position: absolute;
                            top: 12px;
                            left:25px;
                            width: 10px;
                            height: 10px;
                            background:#000;
                            border-radius:10px;
                        }
                    }
                }
                .item-text{
                    margin-bottom: 25px;
                    .article-box{
                        width: 907px;
                        margin-left: 35px;
                        font-size: 20px;
                        line-height: 40px;
                    }
                }
                .item-circle{
                    .circle-box{
                        display: flex;
                        padding-left: 31px;
                        margin-bottom: 35px;
                        .circle-item{
                            width: 110px;
                            height: 110px;
                            border-radius: 110px;
                            border: 1px solid rgba(0,0,0,1);
                            text-align: center;
                            font-size: 24px;
                            position: relative;
                            margin-right: 72px;
                            display: flex;
                            align-items: center;
                            .circle-txt{
                                line-height: 42px;
                                margin: 0 auto;
                            }
                        }
                        .circle-item1{
                             width: 110px;
                            height: 110px;
                            border-radius: 110px;
                            border: 1px solid rgba(0,0,0,1);
                            text-align: center;
                            font-size: 24px;
                            position: relative;
                            margin-right: 72px;
                            display: flex;
                            align-items: center;
                            .circle-txt{
                                line-height: 42px;
                                margin: 0 auto;
                            }
                        }
                        .circle-item::after{
                            content: "";
                            display: block;
                            position: absolute;
                            bottom: 50%;
                            margin-bottom: -16px;
                            right:-50px;
                            width: 30px;
                            height: 32px;
                            background:url("../../assets/image/jiantou.png") no-repeat;
                            background-size: 30px 32px;
                        }
                    }
                }
            }
        }
    }
    .end{
        width:156px!important;
    }
    .margin-bottom18{
        margin-bottom: 18px!important;
    }
    .width100{
        width: 100%!important;
    }
    .width368{
        width: 368px!important;
    }
    .end1{
        width: 204px!important;
    }
    .item-title{
        display:inline-block;
        height: 50px;
        background:rgba(243,243,243,1);
        font-size: 20px;
        font-weight: bold;
        line-height: 50px;
        position: relative;
        text-align: center;
        margin-bottom: 27px;
        padding: 0px 32px;
    }
    .item-title::after{
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left:0;
        width: 940px;
        height: 1px;
        background:rgba(243,243,243,1);;
    }
    .soldetail-left{
        .navleft{
            width: 280px;
            border-radius:5px;
            border:1px solid rgba(153,153,153,1);
            .item-first{
                font-size: 24px;
                padding-left: 55px;
                display: flex;
                .first-img{
                    margin-right: 20px;
                    margin-top: 40px;
                }
                p{
                    line-height: 100px;
                }
            }
            .item-other{
                border-top:1px solid rgba(153,153,153,1);
                line-height: 69px;
                font-size: 20px;
                position: relative;
                display: block;
                p{
                    margin-left: 47px;
                }
            }
            .item-other::after{
                content: "";
                display: block;
                position: absolute;
                bottom: 50%;
                left: 21px;
                width: 10px;
                height: 10px;
                margin-bottom: -5px;
                border-radius:10px;
                background: #000000;
            }
        }
        .active{
            background: #000000;
            color: #ffffff;
        }
        .active::before{
                content: "";
                display: block;
                position: absolute;
                bottom: 50%;
                left: 21px;
                width: 10px;
                height: 10px;
                margin-bottom: -5px;
                border-radius:10px;
                background: #ffffff;
                z-index: 10;
            }
    }
    .show{
        display: block;
    }
    .hidden{
        display: none;
    }
</style>