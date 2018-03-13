$(window).load () ->
  
  placeGridSidebar = () ->
    width = $(window).width()
    
    sidebar_mobile = $('.sidebar-mobile')
    sidebar_pc = $('.sidebar-pc')

    sidebar_hide = 'sidebar-hide'

    if width < 768
      if sidebar_mobile.hasClass sidebar_hide
        sidebar_mobile.removeClass sidebar_hide
        unless sidebar_pc.hasClass sidebar_hide
          sidebar_pc.addClass sidebar_hide
    else
      if sidebar_pc.hasClass sidebar_hide
        sidebar_pc.removeClass sidebar_hide
        unless sidebar_mobile.hasClass sidebar_hide
          sidebar_mobile.addClass sidebar_hide


  if $('body').hasClass 'sidebar'
    placeGridSidebar()
    $( window ).resize () ->
      placeGridSidebar()


  $('.gallery-img').on 'click', () ->
    #modalWarpaper = document.getElementById 'modalWarpaper'
    #imgWarpaper   = document.getElementById 'imgWarpaper'
    #captionText   = document.getElementById 'captionText'

    imgWarpaper.src       = $(this).prop 'src'
    captionText.innerHTML = $(this).prop 'alt'

    modalWarpaper.style.display = "block"        


    closeModal = document.getElementsByClassName("closeModal")[0]

    closeModal.onclick = () ->
      #modalWarpaper = document.getElementById 'modalWarpaper'
      modalWarpaper.style.display = "none"