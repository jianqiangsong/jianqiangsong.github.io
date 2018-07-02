/*

	BadApplePlayerBoot [缁氫附褰╄櫣鎾斁鍣ㄥ紩瀵糫
	
	www.badapple.top 鈥斺€� 涓嶅彧鏄竴娆炬挱鏀惧櫒杩欎箞绠€鍗�

	鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅
	Copyright (C) 缁氫附褰╄櫣宸ヤ綔瀹� Flandre-Studio.cn
	
	浠讳綍浜轰笉寰椾娇鐢ㄦ湰浠ｇ爜璇炵敓浜屽紑榄旀敼浣滃搧锛�
	鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅鈻堚枅
*/

/*
	鏈枃浠朵负鎾斁鍣ㄥ惎鍔ㄥ櫒銆�
	
	濡傞渶鐮旂┒鎾斁鍣ㄤ富js璇峰湪涓嬮潰鎵俱€�
*/

/* 瑙ｅ喅缂栫爜闂锛�
	鎬濊矾锛氬鏋滃綋鍓嶉〉闈㈢紪鐮佷笉涓篣TF8锛屽苟涓旇繖涓彉閲忎笉涓篢rue锛岄偅涔堝氨鎶婅繖涓彉閲忚涓篢rue锛屽苟涓攁jax閲嶆柊鍔犺浇Boot銆�
*/
if("undefined" == typeof BadApplePlayerCharset){var BadApplePlayerCharset=false;}

/* 瑙ｅ喅椤甸潰澶氬紑鎾斁鍣ㄩ噸澶嶉棶棰橈細
	鎬濊矾锛氫娇鐢╨ocalStorage瀛樺偍涓€涓彉閲忥紝
	鍔犺浇鎾斁鍣ㄥ悗灏辫缃甌rue骞禨etInterval(5000)寰幆鍦ㄥ彟涓€涓猯ocalStorage鍙橀噺閲岃缃綋鍓嶆椂闂存埑锛�
	鍏抽棴椤甸潰灏盕alse骞禖learInterval锛�
	
	绗簩娆″姞杞芥挱鏀惧櫒灏卞厛鍒ゆ柇鏄惁True锛�
	濡傛灉鏄疶rue灏盨etTimeout(1000)鍒ゆ柇鍙︿竴涓挱鏀惧櫒鐨勬椂闂存埑鏄笉鏄渶杩戠殑10绉�
	锛堣繖涔堝仛鏄负浜嗛槻姝㈡湁浜涙椂鍊欑粨鏉熸祻瑙堝櫒杩涚▼瀵艰嚧鍏抽棴椤甸潰鏃舵病鏈夎缃瓼alse锛夈€�
*/
if(typeof(jQuery) == 'undefined'){
	console.error('[BadApplePlayerBoot] 娌℃湁瀹夎JQuery锛�');
}

//鏄惁宸茬粡鍔犺浇鎾斁鍣�
var BadApplePlayerIsLoaded = (typeof(localStorage.getItem('xlch_player_isload')) !="undefined" ? ((localStorage.getItem('xlch_player_isload')=='True' && parseInt(localStorage.getItem('xlch_player_runningtime'))+10 > Math.round(new Date().getTime()/1000)) ? true : false) : false);
//鏄惁瑕佸姞杞芥挱鏀惧櫒
var BadApplePlayerIsLoad = (typeof(BadApplePlayerIsLoad) !="undefined" ? BadApplePlayerIsLoad : !BadApplePlayerIsLoaded);
(function (IsLoad,$){
	if(!IsLoad){
		console.info('[BadApplePlayerBoot] 鍙栨秷鍔犺浇鎾斁鍣�.鍘熷洜锛�'+(BadApplePlayerIsLoaded ? '鍏朵粬椤甸潰宸插姞杞�' : '鎵嬪姩绂佹'));
		return false;
	}

	BadApplePlayerIsLoaded=true;
	localStorage.setItem('xlch_player_isload','True');
	setInterval(function (){
		localStorage.setItem('xlch_player_runningtime',Math.round(new Date().getTime()/1000));
	},5000);
	window.onbeforeunload = function() {
		localStorage.setItem('xlch_player_isload','False');
	};
	
	var BadApplePlayerCode=
	'<div id="BadApplePlayer" class="show">'
	+'	<div class="player">'
	+'		<div class="blur-img">'
	+'			<img class="blur" style="top: 0px; display: inline;">'
	+'		</div>'
	+'		<div class="infos">'
	+'			<div class="songstyle">'
	+'				<i class="fa fa-music"></i>'
	+'				<span class="song"></span>'
	+'			</div>'
	+'			<div class="timestyle">'
	+'				<span class="time">00:00 / 00:00</span>'
	+'				<i class="fa fa-clock-o"></i></div>'
	+'			<div class="artiststyle">'
	+'				<i class="fa fa-user"></i>'
	+'				<span class="artist"></span>'
	+'				<span class="moshi">'
	+'					闅忔満鎾斁 <i class="fa fa-random current"></i></span>'
	+'			</div>'
	+'			<div class="artiststyle">'
	+'				<i class="fa fa-folder"></i>'
	+'				<span class="artist1"></span>'
	+'				<span class="geci"></span>'
	+'			</div>'
	+'		</div>'
	+'		<div class="control">'
	+'			<i class="playtype fa fa-retweet current" title="鍒囨崲妯″紡"></i>'
	+'			<i class="prev fa fa-backward" title="涓婁竴棣�"></i>'
	+'			<div class="status">'
	+'				<b>'
	+'					<i class="play fa fa-play" title="鎾斁"></i>'
	+'					<i class="pause fa fa-pause" title="鏆傚仠"></i>'
	+'				</b>'
	+'			</div>'
	+'			<i class="next fa fa-forward" title="涓嬩竴棣�"></i>'
	+'			<i class="search fa fa-search" title="鎼滅储姝屾洸"></i>'
	+'		</div>'
	+'		<div class="bottom">'
	+'			<div class="playprogress">'
	+'				<div class="progressbg">'
	+'					<div class="progressbg1"></div>'
	+'					<div class="progressbg2"></div>'
	+'					<div class="ts"></div>'
	+'				</div>'
	+'			</div>'
	+'			<ul class="bottomright">'
	+'				<li class="ratecontrol">'
	+'					<div class="rate fa fa-play" title="鎾斁鍙橀€�"></div>'
	+'					<div class="rateprogress">'
	+'						<div class="progressbg">'
	+'							<div class="progressbg1"></div>'
	+'							<div class="ts"></div>'
	+'						</div>'
	+'					</div>'
	+'				</li>'
	+'				<li class="volumecontrol">'
	+'					<div class="volume fa fa-volume-up" title="闊抽噺鎺у埗"></div>'
	+'					<div class="volumeprogress">'
	+'						<div class="progressbg">'
	+'							<div class="progressbg1"></div>'
	+'							<div class="ts"></div>'
	+'						</div>'
	+'					</div>'
	+'				</li>'
	+'				<li class="switch-ksclrc" style="display: list-item;"><i title="姝岃瘝寮€鍏�" class="fa fa-toggle-on"></i></li>'
	+'				<li class="switch-playlist"><i class="fa fa-bars" title="鎾斁鍒楄〃"></i></li>'
	+'			</ul>'
	+'			<div style="clear:both"></div>'
	+'		</div>'
	+'		<div class="cover"></div>'
	+'	</div>'
	+'	<div class="playlist">'
	+'		<div class="playlist-bd">'
	+'			<div class="album-list">'
	+'				<div class="musicheader"></div>'
	+'				<div class="list"></div>'
	+'			</div>'
	+'			<div class="song-list">'
	+'				<div class="musicheader">'
	+'					<i class="fa fa-angle-right"></i>'
	+'					<span></span>'
	+'				</div>'
	+'				<div class="list">'
	+'					<ul></ul>'
	+'				</div>'
	+'			</div>'
	+'		</div>'
	+'	</div>'
	+'	<div class="switch-player">'
	+'		<i class="fa fa-angle-right" style="margin-top: 20px;"></i>'
	+'	</div>'
	+'	<div class="searchbox"><input type="text" placeholder="杈撳叆姝屾墜+姝屾洸鍚嶅苟鍥炶溅..." /><i title="娓呯┖鎼滅储鎾斁鍒楄〃" class="delsearchlist fa fa-trash"></i><div class="searchlistbox"><ul></ul></div></div>'
	+'</div>'
	+'<div id="BadAppleTips"></div>'
	+'<div id="BadAppleLrc"></div>'
	+'<div id="BadAppleKsc"></div>'
	+'<div class="xlch_pjax_loading_frame">'
	+'	<div class="double-bounce1"></div>'
	+'	<div class="double-bounce2"></div>'
	+'</div>'
	+'<div class="xlch_pjax_loading"></div>';
	
	
	var BadApplePlayerAdCode=
	'<div id="BadApplePlayer_Ad">'+
	'<div id="BadApplePlayer_Ad_Close" title="鍏抽棴鍚庝竴澶╁唴涓嶄細鏄剧ず">'+
	'	<i class="fa fa-close"></i>'+
	'</div>'+
	'<div id="BadApplePlayer_Ad_Show">'+
	'	<a target="_blank" href="{AdURL}"><img src="{AdImg}"></a>'+
	'</div>'+
	'<div id="BadApplePlayer_Ad_bar">'+
	'	<div id="BadApplePlayer_Ad_Title">'+
	'		<a href="http://bbs.qq-admin.cn/forum.php?mod=viewthread&tid=46" target="_blank">缁氫附褰╄櫣鎾斁鍣ㄨ禐鍔╁晢骞垮憡</a>'+
	'	</div>'+
	'</div>'+
	'</div>';

	BadApplePlayerIsSSL=("https:" == document.location.protocol) ? true : false;
	
	BadApplePlayerDomain_Img=(BadApplePlayerIsSSL ? 'https://img.https.badapple.top/' : 'http://img.badapple.top/');
	BadApplePlayerDomain_Static=(BadApplePlayerIsSSL ? 'https://static.https.badapple.top/' : 'http://static.badapple.top/');
	BadApplePlayerDomain_API=(BadApplePlayerIsSSL ? 'https://api.https.badapple.top/' : 'http://api.badapple.top/');
	BadApplePlayerDomain_WWW='http://www.badapple.top/';
	
	BadApplePlayerCharset=BadApplePlayerCharset ? BadApplePlayerCharset : document.charset;
	if(BadApplePlayerCharset != 'UTF-8'){
		BadApplePlayerCharset='UTF-8';
		$.ajax({url: BadApplePlayerDomain_Static+'BadApplePlayer/Player.js',dataType:'script',scriptCharset:'utf-8'});
		console.info('[BadApplePlayerBoot] Try to fix the charset.');
		return;
	}

	//鍔犺浇鎾斁鍣–SS
	$("<link>").attr({href: BadApplePlayerDomain_Static+"BadApplePlayer/css/player.css",rel: "stylesheet",type: "text/css"}).appendTo("head");

	//绛夊緟DOM鍏ㄩ儴鍔犺浇瀹岋紝涓嶇劧鏌愪簺浜烘妸浠ｇ爜鍔犺浇head閲岋紝瀵艰嚧body鐨凞OM鍙栦笉鍒�
	$(document).ready(function(){
		//鍔犲叆DIV
		$('body').append('<div id="XlchPlayer" style="display:none;"></div>');
		//鍔犲叆浠ｇ爜
		$('#XlchPlayer').append(BadApplePlayerCode);
		BadApplePlayerCode=null;
		
		//鍔犺浇鎾斁鍣ㄩ厤缃€佹瓕鍗�
		$.ajax({
			url: BadApplePlayerDomain_API+"/WebConfig2.php?Key="+XlchKey,
			dataType:"script",
			scriptCharset:'utf-8',
			cache: false,
			async: true,
			success: BadApplePlayer_loadPlayerJs,
			error: function(error) {
				console.error('[BadApplePlayerBoot] Load Fail: WebConfig2.php',error);
			}
		});
	});
	
	function BadApplePlayer_loadPlayerJs(){
		if(typeof($('body').mCustomScrollbar)=='undefined'){
			console.warn('[BadApplePlayerBoot] 鏈娴嬪埌 scrollbar.js銆傚彲鑳界殑鍘熷洜锛�');
			console.warn('[BadApplePlayerBoot] 1.鎾斁鍣ㄤ唬鐮佺殑涓嬮潰鍙堥噸鏂板姞杞戒簡涓€閬岼Query,瀵艰嚧缁勪欢娉ㄥ唽鐨凧query鍑芥暟琚竻绌�');
			console.warn('[BadApplePlayerBoot] 瑙ｅ喅鍔炴硶锛�');
			console.warn('[BadApplePlayerBoot] 1.灏濊瘯鏌ョ湅缃戦〉婧愪唬鐮侊紝鎼滅储"jquery"锛屾煡鐪嬫槸鍚︽湁澶氫釜jquery琚姞杞斤紝濡傛灉鏈夛紝璇峰垹闄よjquery銆�');
			console.warn('[BadApplePlayerBoot] 2.鍔犲叆缁氫附褰╄櫣绔欓暱缇わ紝瀵绘壘鎶€鏈府鍔┿€�');
			$.ajax({
				url: BadApplePlayerDomain_Static+"BadApplePlayer/js/scrollbar.js",
				dataType:"script",
				cache: true,
				async: false,
				scriptCharset:'utf-8',
				error: function(error) {
					console.error('[BadApplePlayerBoot] Load Fail: scrollbar.js');
				},
				success: function(data) {
					console.warn('[BadApplePlayerBoot] 宸蹭负鎮ㄩ噸鏂板姞杞� scrollbar.js');
				}
			});
		}
		if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i) && !onphone){
			$('#XlchPlayer').html('');
		}else{
			//鍔犺浇闄勫姞JS
			BadApplePlayer_LoadJs();
			
			//鍔犺浇鎾斁鍣↗S
			$.ajax({
				url: BadApplePlayerDomain_Static+"BadApplePlayer/js/player.js",
				dataType:"script",
				cache: true,
				async: true,
				scriptCharset:'utf-8',
				success: function(data) {
					if(typeof($('body').mCustomScrollbar)=='undefined'){
						console.warn('[BadApplePlayerBoot] 鎾斁鍣ㄧ敱浜庤鍙栦笉鍒扮粍浠� scrollbar.js 瀵艰嚧宕╂簝');
						setTimeout(function (){
							BadAppleTips.show('鎾斁鍣ㄥ彲鑳藉凡缁忓穿婧冿紝璇锋寜F12鍒囨崲鍒癑S鎺у埗鍙�(Console)鏌ョ湅銆�');
						},5000);
					}
					if(typeof(cnzz_protocol) != "undefined"){
						//鐢ㄤ簡杈ｉ浮CNZZ
						console.warn('[BadApplePlayerBoot] 绯荤粺妫€娴嬪埌鎮ㄥ畨瑁呬簡鍨冨溇缁熻鎻掍欢CNZZ锛岃鎻掍欢鐢变簬缂栧啓鎶€鏈汉鍛樼殑鐤忓拷锛屾煇浜涙儏鍐典笅浼氳閲嶆柊鍔犺浇JQuery锛屽皢浼氬鑷存煇浜涗緷璧栦簬JQuery鐨刯s绫诲簱澶辨晥锛屽苟瀵艰嚧鎾斁鍣ㄥ穿婧冿紝寤鸿鎮ㄤ娇鐢ㄧ櫨搴︾粺璁℃垨灏嗚缁熻浠ｇ爜绉诲姩鍒版挱鏀惧櫒浠ｇ爜鐨勪笅闈紝浠ュ厤鍐茬獊锛�');
						console.warn('[BadApplePlayerBoot] 鍦ㄨ繖閲岀鏅竴涓嬶細杩欑帺鎰忓氨鏄釜搴熺墿锛屽嚑鐧惧勾ui涓嶆洿鏂帮紝鍔犲箍鍛婂€掓槸鎸虹Н鏋侊紝鏈嶅姟鍣ㄨ繕缁忓父boom锛屽紑鍙戜汉鍛樹笉涓撲笟銆�');
					}
					$('#XlchPlayer').show();
				},
				error: function(error) {
					console.error('[BadApplePlayerBoot] Load Fail: player.js',error);
				}
			});
		}
	}
	
	var $isAD=false;
	var isClose=false;
	var date=new Date();
	var today=(date.getMonth()+1)+'-'+date.getDate();
	
	function BadApplePlayer_LoadJs(){
		BadApplePlayer_LoadDrag();
		BadApplePlayer_LoadBaiduTongji();
		BadApplePlayer_AD(false);
		BadApplePlayer_Check();
	}
	function BadApplePlayer_Check(){
		setTimeout(function (){
			if($isAD && localStorage.getItem('xlch_player_addate') != today && isClose != true && (
				!$('#BadApplePlayer_Ad').is(':visible') ||
				$('#BadApplePlayer_Ad').css('opacity') != '1' ||
				$('#BadApplePlayer_Ad').height() != 300 ||
				$('#BadApplePlayer_Ad').width() != 300 ||
				$('#BadApplePlayer_Ad').css('bottom') != '0px' ||
				$('#BadApplePlayer_Ad').css('right') != '0px' ||
				$('#BadApplePlayer_Ad').css('visibility') == 'collapse' ||
				$('#BadApplePlayer_Ad').css('visibility') == 'hidden'
			)){
				BadApplePlayer_AdUrl='http://www.badapple.top/';
				BadApplePlayer_AdImg='http://img.badapple.top/Xlch/AD/prpr.png';
				
				$('#BadApplePlayer_Ad').remove();
				BadApplePlayer_AD(true);
				
				$('#BadApplePlayer_Ad').css('opacity','1');
				$('#BadApplePlayer_Ad').height(300);
				$('#BadApplePlayer_Ad').width(300);
				$('#BadApplePlayer_Ad').css('bottom','0px');
				$('#BadApplePlayer_Ad').css('right','0px');
				$('#BadApplePlayer_Ad').css('visibility','initial');
			}
		},5000);
	}
	function BadApplePlayer_AD(e){
		$isAD=BadApplePlayer_IsAd;
		if((BadApplePlayer_IsAd && !navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) || e){ //鎵嬫満涓嶅睍绀�
			if(localStorage.getItem('xlch_player_addate') != today){ //灞曠ず骞垮憡
				var Tmp_BadApplePlayerAdCode=BadApplePlayerAdCode.replace('{AdURL}',BadApplePlayer_AdUrl).replace('{AdImg}',BadApplePlayer_AdImg);
				$('#XlchPlayer').append(Tmp_BadApplePlayerAdCode);
			}
			$('#BadApplePlayer_Ad_Close').click(function(){
				isClose=true;
				localStorage.setItem('xlch_player_addate',today);
				$('#BadApplePlayer_Ad').hide();
			});
		}else{
			isClose=true;
		}
	}
	function BadApplePlayer_LoadBaiduTongji(){
		var _hmt = _hmt || [];
		(function() {
			var hm = document.createElement("script");
			hm.src = "https://hm.baidu.com/hm.js?e7832a384d37994887357af186b47e63";
			var s = document.getElementsByTagName("script")[0]; 
			s.parentNode.insertBefore(hm, s);
		})();
	}
	function BadApplePlayer_LoadDrag(){
		jQuery.fn.extend({
			DragClose: function() {
				if (this.length) for (var a in $(this).data("options"))"dragObj" == a && $(this).data("options").dragObj.dostop()
			},
			Drag: function() {
				var a = {
					dragObj: $(this),
					parentObj: $(document),
					callback: null,
					isPhone: !1,
					lockX: !1,
					lockY: !1,
					maxWidth: 0,
					maxHeight: 0
				};
				arguments.length && (a = $.extend({}, a, arguments[0]));
				a.dragObj.data("options", a);
				var c = $(this)[0],
					b = a.dragObj,
					e = 0,
					d = 0,
					g = a.callback;
				"static" == $(this).css("position") && $(this).css("position", "relative");
				var m = 0,
					n = 0;
				a.isPhone ? (b.__start = function(f) {
					m = Math.max(a.parentObj.width(), a.maxWidth);
					n = Math.max(a.parentObj.height(), a.maxHeight);
					f = event.targetTouches[0];
					e = f.clientX - c.offsetLeft;
					d = f.clientY - c.offsetTop;
					b.on("touchmove", b.__move);
					b.on("touchend", b.__end);
					return !1
				}, b.__move = function(f) {
					touch = event.targetTouches[0];
					f = touch.clientX - e;
					var h = touch.clientX - d,
						k = c.offsetWidth,
						l = c.offsetHeight;
					0 > f ? f = 0 : f + k > m && (f = m - k);
					0 > h ? h = 0 : h + l > n && (h = n - l);
					a.lockX || (c.style.top = h + "px");
					a.lockY || (c.style.left = f + "px");
					g && g(b[0], f, h, k, l);
					return !1
				}, b.__end = function(a) {
					b.off("touchmove");
					b.off("touchend");
					_flag = !1;
					d = e = 0;
					g && g(b[0]);
					return !1
				}, b.dostart = function() {
					b.on("touchstart", b.__start)
				}, b.dostop = function() {
					b.off("touchstart");
					b.off("touchmove");
					b.off("touchend")
				}) : (b.__start = function(f) {
					m = Math.max(a.parentObj.width(), a.maxWidth);
					n = Math.max(a.parentObj.height(), a.maxHeight);
					e = f.clientX - c.offsetLeft;
					d = f.clientY - c.offsetTop;
					$(document).on("mousemove", b.__move);
					$(document).on("mouseup", b.__end);
					b[0].setCapture ? b[0].setCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
					f.stopPropagation();
					f.preventDefault()
				}, b.__move = function(f) {
					var h = f.clientX - e,
						k = f.clientY - d,
						l = c.offsetWidth,
						p = c.offsetHeight;
					0 > h ? h = 0 : h + l > m && (h = m - l);
					0 > k ? k = 0 : k + p > n && (k = n - p);
					a.lockX || (c.style.top = k + "px");
					a.lockY || (c.style.left = h + "px");
					g && g(b[0], h, k, l, p);
					f.stopPropagation();
					f.preventDefault()
				}, b.__end = function(a) {
					b[0].releaseCapture ? b[0].releaseCapture() : window.releaseEvents && window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP);
					$(document).off("mousemove");
					$(document).off("mouseup");
					d = e = 0;
					g && g(b[0]);
					a.stopPropagation();
					a.preventDefault()
				}, b.dostart = function() {
					b.on("mousedown", b.__start)
				}, b.dostop = function() {
					b.off("mousedown");
					$(document).off("mousemove");
					$(document).off("mouseup")
				});
				b.dostart()
			}
		});
	}
})(BadApplePlayerIsLoad,jQuery);