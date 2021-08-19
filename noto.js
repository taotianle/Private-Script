var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/wap/video/index/details';
const p2 = '/wap/user/profile/index';
const p3 = '/wap/user/Profile/index'



if (url.indexOf(p1) != -1) {
	obj.d.category.access = "all";
     obj.d.watch_data.remaining_watch_time = 999;
     obj.d.video.advertisement_status = "N";
     obj.d.advertisement.top.target = "N";
	body = JSON.stringify(obj);
 }

if (url.indexOf(p2) != -1) {
	obj.d.user_is_member = "Y";
     obj.d.user_is_agency = "Y";
     obj.d.user_member_expire_time = 16179476940;
	body = JSON.stringify(obj);
 }

if (url.indexOf(p3) != -1) {
	obj.d.user_is_member = "Y";
     obj.d.user_is_agency = "Y";
     obj.d.user_download_count = 9999;
     obj.d.user_tv_count = 9999;
     obj.d.user_member_expire_time = 16179476940;
	body = JSON.stringify(obj);
 }

$done({body});
