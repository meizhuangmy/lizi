<template>
	<div>
		<section id="page">
			<div class="reg_bd" id="reg_form">
				<p><input type="number" class="text" name="mobile" placeholder="输入手机号"></p>
				<p class="code_line">
					<input type="number" class="text text_code" name="code" placeholder="输入验证码">
					<a href="javascript:;" class="btn send_code">发送验证码</a>
				</p>
				<p><input type="password" class="text" name="password" placeholder="请设置密码"></p>
			</div>
			<div class="reg_xieyi">
				注册即视为同意<a href="javascript:;">《丽子美妆网络服务协议》</a>
			</div>
			<div class="btn_bd">
				<p><a href="javascript:;" class="btn2" id="reg_btn">注册</a></p>
			</div>
		</section>
		
	</div>
</template>

<script>
	export default {
		data(){
			return {
				data:[]
			}
		}

		
	}


</script>

<style lang="less" scoped>
#page{
	padding: 20px;
	background: #fff;
	.reg_bd{
		overflow: hidden;

		p{
			margin-bottom: 20px;
			overflow: hidden;

			input{
				font-size: 15px;			
			}
			.text{
				border: 1px solid #d8d8da;
			    padding: 12px;
			    width: 100%;
			    box-sizing: border-box;
			}

			.text_code{
				display: block;
			    width: 60%;
			    margin-right: 15px;
			    float: left;
			}

			.send_code{
				float: left;
				display: inline-block;
			    width: 80px;
			    text-decoration:none;
			    padding: 8px 5px 7px;
			    margin-top: 5px;
			    font-size: 12px;
		        color: #fff;
			    background-color: #ff666b;
			    vertical-align: middle;
			    -webkit-tap-highlight-color: rgba(0,0,0,0);
			    text-align: center;
			}
		}
	}
	.reg_xieyi {
	    color: #999;
	    font-size:14px;
	    text-align: left;
	    margin-bottom: 40px;
	    a{
	    	color: #222;
	    }
	}
	.btn_bd{
		overflow: hidden;

		p{
			margin-bottom: 20px;
			overflow: hidden;

			.btn2{
				background: #000;
				display: block;
			    padding: 12px 12px 13px;
			    height: 20px;
			    line-height: 20px;
			    font-size: 100%;
			    color: #fff;
			    vertical-align: middle;
			    -webkit-tap-highlight-color: rgba(0,0,0,0);
			    text-align: center;
			}
		}
	}
}


#footer[data-v-a2331c0c]{
	padding-bottom: 166px;
	/*background: #999;*/
}

</style>