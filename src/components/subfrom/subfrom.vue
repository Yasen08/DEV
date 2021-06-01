<template>
            <div class="contact-right">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="电话" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="企业" prop="enterprise">
                    <el-input v-model="ruleForm.enterprise"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="备注" prop="remark" class="contact-label">
                    <el-input type="textarea" v-model="ruleForm.remark"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm',ruleForm)">提交</el-button>
                </el-form-item>
                </el-form>
          </div>
</template>

<script>
import service from "../../utils/axios/index"
export default {
    data(){
        return{
            ruleForm: {
                name: '',
                phone:'',
                enterprise:'',
                email:'',
                remark:''
                },
                rules: {
                name: [
                    { required: true, message: '姓名为必填项', trigger: 'blur' },
                    { max: 5, message: '姓名最多可输入5个字', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '电话为必填项', trigger: 'blur' },
                    { pattern:/0?(13|14|15|17|18|19)[0-9]{9}/,message: '请输入正确格式电话', trigger: 'blur' },
                    { max: 11, message: '请输入正确格式电话', trigger: 'blur' }
                   ],
                enterprise: [
                    { max: 30, message: '企业名称最多可输入30字', trigger: 'blur' }
                ],
                email: [
                    { pattern:/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/, message: '请输入正确的邮箱地址', trigger: 'blur' }
                ],
                remark: [
                    { max: 300, message: '最多可输入300字', trigger: 'blur' }
                ]
                }
                }
    },
    methods:{
    // 网站提交按钮
            submitForm(formName,data) {
                 this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let fromData ={
                            businessName:data.enterprise,
                            businessPhone:data.phone,
                            businessUser:data.name,
                            businessMail:data.email,
                            add_memo:data.remark
                        }
                    service.post("official/business_info",fromData).then(res =>{
                            this.toast("提交成功，我们的工作人员将在3个工作日内与您取得联系")
                            this.$nextTick(() => {
                                this.$refs['ruleForm'].resetFields()
                            })
                    })
                    } else {
                        this.toast("提交失败，请检查填写内容")
                        return false;
                    }
                 })
                 },
    //toast弹框功能
    toast(msg, duration) {
            duration = isNaN(duration) ? 3000 : duration;
            var m = document.createElement('div');
            m.innerHTML = msg;
            m.style.cssText = "font-family:siyuan;max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
            document.body.appendChild(m);
            setTimeout(function() {
                var d = 0.5;
                m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
                m.style.opacity = '0';
                setTimeout(function() {
                    document.body.removeChild(m)
                }, d * 1000);
            }, duration);
        },
}
}
</script>

<style>
    .contact-righr{
        font-size: 20px;
    }
    .el-form-item__label{
        line-height: 60px;
    }
    .el-form-item__label{
        font-size: 20px;
        color: #000000;
    }
    .el-input__inner{
        width: 500px;
        height: 60px;
        background:rgba(245,245,245,1);
        border: none;
    }
    .el-form-item__error{
        font-size: 14px;
    }
    .el-textarea__inner{
        width: 500px;
        height: 140px;
        background:rgba(245,245,245,1);
        border: none;
        margin-bottom: 40px;
    }
    .el-form-item__label{
        width: 88px!important;
    }
    .el-form-item__content{
        position: relative;
    }
    .el-button--primary{
        margin-left: 320px;
        width: 180px;
        height: 50px;
        border-radius:30px;
        border: 1px solid #000;
        color: #000;
        background:#fff;
        font-size: 20px;
        font-weight: bold;
        line-height:25px;
        margin-bottom: 50px;
    }
    .el-button--primary:hover{
        background: #000;
        border-color: #000;
        color: #FFF;
    }
    .el-button--primary:focus{
        background:#fff;
        border-color: #000;
        color: #000;
    }
    .el-input__inner{
        font-size: 16px;
        color: #000;
    }
    .el-input{
        width: 500px;
    }
    .el-form-item__content{
        width: 500px;
    }
</style>