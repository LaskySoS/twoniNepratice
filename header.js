let VisibleMenu = ''; // 記錄目前顯示的子選單的 ID

// 顯示或隱藏子選單
function switchMenu( theMainMenu, theSubMenu, theEvent ){
    let SubMenu = document.getElementById( theSubMenu );
    if( SubMenu.style.visibility === 'hidden' ){ // 顯示子選單
        SubMenu.style.width = theMainMenu.width; // 讓子選單的最小寬度與主選單相同 (僅為了美觀)*/
        SubMenu.style.visibility = 'visible';
        SubMenu.style.opacity = '1';
        hideMenu(); // 隱藏子選單
        VisibleMenu = theSubMenu;
    }
    else{ // 隱藏子選單
        if( theEvent != 'MouseOver' || VisibleMenu != theSubMenu ){
            SubMenu.style.visibility = 'hidden';
            SubMenu.style.opacity = '0';
            VisibleMenu = '';
        }
    }
}

// 隱藏子選單
function hideMenu(){
    if( VisibleMenu != '' ){
        document.getElementById( VisibleMenu ).style.visibility = 'hidden';
        document.getElementById( VisibleMenu ).style.opacity = '0'; 
    }
    VisibleMenu = '';
}