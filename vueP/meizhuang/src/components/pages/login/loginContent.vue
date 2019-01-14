<template>

	<section id="page">
		<div class="login_bd" id="login_form">
			<input type="text" class="text" name="username" placeholder="输入手机号/邮箱/用户名">
			<input type="password" class="text" name="password" placeholder="登录密码">
		</div>
		<div class="forget_pwd">
			<a href="javascript:;">忘记密码?</a>
		</div>
		<div class="btn_bd">
			<p><a href="javascript:;" class="btn" id="login_btn">登录</a></p>
			<p @click="goto"><a href="javascript:;" class="btn2">注册</a></p>
		</div>
		<div class="login_third">
			<p><span>第三方账号登录</span></p>
			<div class="bd">
				<div><a href="javascript:;"><i class="iconfont"></i></a></div>
				<div class="mid"><a href="javascript:;"><i class="iconfont"></i></a></div>
				<div><a href="javascript:;"><i class="iconfont"></i></a></div>
			</div>
		</div>
	</section>
</template>

<script>
	
	export default {
		data(){
			return{}
		},
		methods:{
			goto(){
				this.$router.push({name:"Reg"})
			},
		},
	}
</script>

<style lang="less" scoped>
	#page {
	    padding: 20px;

	    .text {
		    border: 1px solid #d8d8da;
		    padding: 12px;
		    width: 100%;
		    box-sizing: border-box;
		    font-size: 100%;
		    margin-bottom: 20px;
    		font-size: 15px;
		}
		.forget_pwd {
		    text-align: right;
		    margin-top: -10px;
		    margin-bottom: 40px;

		    a {
			    color: #999;
			    text-decoration: none;
			    font-size: 12px;
			}
		}

		/*登录注册按钮*/
		.btn_bd{
			overflow: hidden;
			p{
				margin-top: 20px;

				.btn,.btn2{
					display: block;
				    padding: 12px 12px 13px;
				    height: 20px;
				    line-height: 20px;
				    font-size: 100%;
				    color: #fff;
				    background-color: #ff666b;
				    vertical-align: middle;
				    -webkit-tap-highlight-color: rgba(0,0,0,0);
				    text-align: center;
				}

				.btn2{
					background: #000;
					color: #fff;
				}
			}
		}

		/*脚本*/
		.login_third {
		    text-align: center;
		    margin-top: 20px;

		    p{
		    	border-bottom: 1px solid #d8d8d8;

		    	span{
		    		position: relative;
				    top: 10px;
				    display: inline-block;
				    padding: 0 10px;
				    background-color: #f5f5f5;
				    color: #999;
		    	}
		    }

		    .bd {
			    display: -webkit-box;
			    padding-top: 30px;
				
				.mid {
				    width: 50%;
				}
			    div{
			    	width: 25%;
			    	a{
			    		display: block;
					    width: 30px;
					    height: 30px;
					    padding: 10px;
					    border-radius: 25px;
					    border: 1px solid #ddd;
					    color: #999;
					    line-height: 24px;
					    font-size: 30px;
					    margin: 0 auto;

					    .iconfont {
						    font-family: lizi;
						    font-size: 100%;
						    font-weight: 400;
						    -webkit-font-smoothing: antialiased;
						    -moz-osx-font-smoothing: grayscale;
						}
			    	}
			    }
			}
		}
	}
</style>