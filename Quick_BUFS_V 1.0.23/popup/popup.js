const Announcement = "https://www.bufs.ac.kr/bbs/board.php?bo_table=notice_aca";
const BUFS_Sugang_URL = "https://sugang.bufs.ac.kr/Login.aspx";
const NOMAD_URL = "https://eport.bufs.ac.kr/default.aspx?ReturnUrl=%2f";
const BUFSCalendar = "https://m.bufs.ac.kr/popup/Haksa_Iljeong.aspx?gbn=";
const BUFS_e_CLASS_URL = "https://eclass.bufs.ac.kr/";
const BUFSHOME = "https://www.bufs.ac.kr/";
const BUFSPStudentPortal = "https://m.bufs.ac.kr/";
const BUFStimetable_URL = "https://m.bufs.ac.kr/LESN/LESN7010.ASPX?mc=0931";
const BUFS_Library_URL = "https://library.bufs.ac.kr/#";
const BUFS_PhoneBook_URL = "https://www.bufs.ac.kr/bbs/board.php?bo_table=phone_search";
const WEEKLYFOODLIST_URL = "https://bufs.ac.kr/bbs/board.php?bo_table=weekly_meal&wr_id=1";
const WIFI_INSTALL_PROGRAMM_URL = "https://bufs.ac.kr/bbs/board.php?bo_table=library_DB&wr_id=15";
const MyGITHUB_REPOSITORY= "https://github.com/SAMEZ-0129/BUFS-Direct";

function openURLInNewTab(url) {
    whale.tabs.create({ url });
}
function openURLInWindow(urls) {
    window.open(urls,"학사일정", "height=800,width=1000");
}

document.getElementById('clickAnn').addEventListener('click', () => { openURLInNewTab(Announcement) }, false);
document.getElementById('clickCal').addEventListener('click', () => { openURLInWindow(BUFSCalendar) }, false);
document.getElementById('clickbufs').addEventListener('click', () => { openURLInNewTab(BUFSHOME) }, false);
document.getElementById('clickTime').addEventListener('click', () => { openURLInNewTab(BUFStimetable_URL) }, false);
document.getElementById('clickeclass').addEventListener('click', () => { openURLInNewTab(BUFS_e_CLASS_URL) }, false);
document.getElementById('clickSugang').addEventListener('click', () => { openURLInNewTab(BUFS_Sugang_URL) }, false);
document.getElementById('clickPortal').addEventListener('click', () => { openURLInNewTab(BUFSPStudentPortal) }, false);
document.getElementById('clickNOMAD').addEventListener('click', () => { openURLInNewTab(NOMAD_URL) }, false);
document.getElementById('clickLib').addEventListener('click', () => { openURLInNewTab(BUFS_Library_URL) }, false);
document.getElementById('clickPhone').addEventListener('click', () => { openURLInNewTab(BUFS_PhoneBook_URL) }, false);
document.getElementById('clickFood').addEventListener('click', () => { openURLInNewTab(WEEKLYFOODLIST_URL) }, false);
document.getElementById('clickWifi').addEventListener('click', () => { openURLInNewTab(WIFI_INSTALL_PROGRAMM_URL) }, false);
document.getElementById('clickGIT').addEventListener('click', () => { openURLInNewTab(MyGITHUB_REPOSITORY) }, false);

