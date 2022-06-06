const BACKEND_URL="http://localhost:13414",FRONT_URL="http://localhost:37866",GET="GET",POST="POST",PATCH="PATCH",DELETE="DELETE",OK=200,CREATED=201,NO_CONTENT=204,BAD_REQUEST=400,UNAUTHORIZED=401,FORBIDDEN=403,NOT_FOUND=404,CONFLICT=409,INTERNAL_SERVER_ERROR=500,FAIL_FETCH="fail_fetch",REQUEST_SUCCESS="request_success",LOGIN_REQUIRED="login_required",LOGIN="login",ALREADY_LOGIN="already_login",LOGOUT="logout",SIGN_UP="sign_up",INVALID_BODY="invalid_body",PW_MISMATCHED="pw_mismatched",NEW_PW_CONFIRM_MISMATCHED="pw/pw_confirm_mismatched",ONLY_IMAGE="only_jpg,jpeg,gjf,png(upper_5MB)_format_can_be_uploaded",DUPLICATED_NICKNAME="duplicated_nickname",NOT_EXIST="not_exist",NO_COMMENT="no_comment",FAVORITE="favorite +1",CANCEL_FAVORITE="cancel_favorite",NOT_AUTHORIZATION="not_authorization",NO_REGISTERED_INFORMATION="no_registered_information",INFO="info",ERROR="error",SUCCESS="success",WARNING="warning",QUESTION="question",CHECK="check";async function getRecentBoard(){try{const e={mode:"cors",credentials:"include"},t=await fetch(`${BACKEND_URL}/board/get`,e),n=await t.json();return t.status===OK?n[0]:n}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function getEntireBoard(e){try{let t;const n={mode:"cors",credentials:"include"};t=void 0===e?await fetch(`${BACKEND_URL}/board/get/free-bulletin`,n):await fetch(`${BACKEND_URL}/board/get/free-bulletin?page=${e}`,n);return await t.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function getDetailBoard(e){try{const t={mode:"cors",credentials:"include"},n=await fetch(`${BACKEND_URL}/board/get/free-bulletin/${e}`,t),o=await n.json();return n.status===OK&&(o.state=REQUEST_SUCCESS),o}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function writePostRequest(e,t,n){try{const o=[],r=n.split("#");r.shift();for(let e of r){const t={content:e};o.push(t)}const s={mode:"cors",method:POST,credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Headers":"Content-Type, Referrer-Policy","Referrer-Policy":"strict-origin-when-cross-origin"},body:JSON.stringify({category:"자유게시판",postTitle:e,postContent:t,tags:o})},c=await fetch(`${BACKEND_URL}/board/write`,s);if(201===c.status)return{state:REQUEST_SUCCESS};return await c.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function getPostRequest(e){try{const t={mode:"cors",method:GET,credentials:"include"},n=await fetch(`${BACKEND_URL}/board/write?boardIndex=${e}`,t),o=await n.json();return n.status===OK&&(o.state=REQUEST_SUCCESS),o}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function editPostRequest(e,t,n,o){try{const r=[],s=o.split("#");s.shift();for(let e of s){const t={content:e};r.push(t)}const c={mode:"cors",method:PATCH,credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Headers":"Content-Type, Referrer-Policy","Referrer-Policy":"strict-origin-when-cross-origin"},body:JSON.stringify({category:"자유게시판",postTitle:t,postContent:n,tags:r})},a=await fetch(`${BACKEND_URL}/board/edit?boardIndex=${e}`,c);if(a.status===OK)return{state:REQUEST_SUCCESS};return a.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function deletePostRequest(e){try{const t={mode:"cors",method:DELETE,credentials:"include"},n=await fetch(`${BACKEND_URL}/board/delete?boardIndex=${e}`,t);if(204===n.status)return{state:REQUEST_SUCCESS};return await n.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function favoritePostRequest(e){try{const t={mode:"cors",method:PATCH,credentials:"include"},n=await fetch(`${BACKEND_URL}/board/like?boardIndex=${e}`,t);return n.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function getSearchBoard(e,t,n){try{let o;const r={mode:"cors",method:GET,credentials:"include"};o=void 0===n?await fetch(`${BACKEND_URL}/board/search/free-bulletin?searchOption=${e}&searchContent=${t}`,r):await fetch(`${BACKEND_URL}/board/search/free-bulletin?searchOption=${e}&searchContent=${t}&page=${n}`,r);return o.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function userPostRequest(e){try{let t;const n={mode:"cors",method:GET,credentials:"include"};t=void 0===e?await fetch(`${BACKEND_URL}/board/user`,n):await fetch(`${BACKEND_URL}/board/user?page=${e}`,n);return t.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function getSignUpGuide(){try{const e={mode:"cors",credentials:"include"},t=await fetch(`${BACKEND_URL}/user/sign-up/guide`,e);if(t.status===OK){return await t.text()}return await t.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function signUpRequest(e,t,n,o,r,s,c){try{const a={mode:"cors",method:POST,credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Headers":"Content-Type, Referrer-Policy","Referrer-Policy":"strict-origin-when-cross-origin"},body:JSON.stringify({id:e,pw:t,confirmPw:n,name:o,nickname:r,phoneNumber:s,gender:c})},i=await fetch(`${BACKEND_URL}/user/sign-up`,a);return await i.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function dropOutRequest(){try{const e={mode:"cors",method:DELETE,credentials:"include",headers:{"Access-Control-Allow-Headers":" Referrer-Policy","Referrer-Policy":"strict-origin-when-cross-origin"}},t=await fetch(`${BACKEND_URL}/user/drop-out`,e);if(204===t.status)return{state:REQUEST_SUCCESS};return await t.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function loginRequest(e,t){try{const n={mode:"cors",method:POST,credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Headers":"Content-Type"},body:JSON.stringify({id:e,pw:t})},o=await fetch(`${BACKEND_URL}/user/login`,n);return await o.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function logoutRequest(){try{const e={mode:"cors",method:POST,credentials:"include"},t=await fetch(`${BACKEND_URL}/user/logout`,e);return await t.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function getUserLibrary(){try{const e={mode:"cors",credentials:"include"},t=await fetch(`${BACKEND_URL}/user/user-lib`,e);return await t.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function reqRegisterUserLibrary(e){try{const t={mode:"cors",method:PATCH,credentials:"include"},n=await fetch(`${BACKEND_URL}/user/user-lib?libraryIndex=${e}`,t);if(n.status===OK)return{state:REQUEST_SUCCESS};return await n.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function deleteUserLibrary(e){try{const t={mode:"cors",method:DELETE,credentials:"include"},n=await fetch(`${BACKEND_URL}/user/user-lib?libraryIndex=${e}`,t);return await n.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function editNicknameRequest(e){try{const t={mode:"cors",method:PATCH,credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Headers":"Content-Type, Referrer-Policy","Referrer-Policy":"strict-origin-when-cross-origin"},body:JSON.stringify({nickname:e})},n=await fetch(`${BACKEND_URL}/user/profile/nickname`,t);if(n.status===OK)return{state:REQUEST_SUCCESS};return await n.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function editProfileImageRequest(e){try{const t={mode:"cors",method:PATCH,credentials:"include",body:e},n=await fetch(`${BACKEND_URL}/user/profile/profileImage`,t);if(n.status===OK)return{state:REQUEST_SUCCESS};return await n.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function editContactRequest(e){try{const t={mode:"cors",method:PATCH,credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Headers":"Content-Type, Referrer-Policy","Referrer-Policy":"strict-origin-when-cross-origin"},body:JSON.stringify({phoneNumber:e})},n=await fetch(`${BACKEND_URL}/user/new-contact`,t);if(n.status===OK)return{state:REQUEST_SUCCESS};return await n.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function editPwRequest(e,t,n){try{const o={mode:"cors",method:PATCH,credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8","Access-Control-Allow-Headers":"Content-Type, Referrer-Policy","Referrer-Policy":"strict-origin-when-cross-origin"},body:JSON.stringify({pw:e,newPw:t,confirmPw:n})},r=await fetch(`${BACKEND_URL}/user/new-pw`,o);if(r.status===OK)return{state:REQUEST_SUCCESS};return await r.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function getUserInfo(){try{const e={mode:"cors",credentials:"include"},t=await fetch(`${BACKEND_URL}/user/info`,e);return await t.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function getWiseSaying(){try{const e={mode:"cors",credentials:"include"},t=await fetch(`${BACKEND_URL}/wise-saying`,e);return await t.json()}catch(e){return console.log(`FETCH ERROR: ${e}`),{state:FAIL_FETCH}}}async function checkLogin(){(await getUserInfo()).state!==LOGIN_REQUIRED&&(location.href="/authorized")}async function home(){const e=await getRecentBoard();for(let t in e)document.getElementsByClassName("home__board--title")[t].innerHTML=`${e[t].postTitle}`,document.getElementsByClassName("home__board--nickname")[t].innerHTML=`작성자: ${e[t].nickname}`,document.getElementsByClassName("home__board--link")[t].href=`/board/${e[t].boardIndex}`;const t=await getWiseSaying();document.getElementsByClassName("home__wiseSaying--content")[0].innerHTML=t.wiseSayingContent,document.getElementsByClassName("home__wiseSaying--celebrity")[0].innerHTML=t.celebrity}async function lifeCycle(){await checkLogin(),await home()}lifeCycle();