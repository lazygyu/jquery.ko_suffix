/*************************** 
 * jquery.ko_suffix.js 
 * author : lazygyu
 * license : MIT
 * contact : lazygyu@gmail.com
****************************/
(function($){
	function has_last_ch(ch){
		var c = ch;
		var t = c.charCodeAt(0);
		t -= 0xAC00;
		var lc = t % 28;
		return (lc!==0);
	}

	// 을/를 이/가 은/는 처리
	function change_in(str){
		if( !str ) return;
		var cur =0, l = str.length;
		var last_ch = '', cur_ch = '';
		var result = '';
		var blanks = /^[\b\s\t\r\n]+$/;
		var ch_table = {
			"을":{t:'을', f:'를'},
			"은":{t:'은', f:'는'},
			"이":{t:'이', f:'가'},
			"와":{t:'과', f:'와'},
			"랑":{t:'이랑', f:'랑'},
			"로":{t:'으로', f:'로'},
			"라":{t:'이라', f:'라'}
		};
		while(cur < l){
			cur_ch = str.substr(cur,1);
			if( cur_ch == '{' && str.substr(cur+2, 1) == '}' && !blanks.test(last_ch) ){
				cur_ch = str.substr(cur+1,1);
				cur+=3;
				if( !ch_table[cur_ch] ){
					result += cur_ch;
				}else{
					result += has_last_ch(last_ch)?ch_table[cur_ch].t:ch_table[cur_ch].f;
				}
				last_ch = '';
			}else{
				result += cur_ch;
				cur++;
				last_ch = cur_ch;
			}
		}
		return result;
	}
	
	$.fn.ko_suffix = function(){
		return this.each(function(){
			$(this).text(change_in($(this).text()));
		});
	};
	
	$.ko_suffix = change_in;
	
})(jQuery);
