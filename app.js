$(document).ready(function() {

  $('form').on('submit', function(e) {

    e.preventDefault()

    const inputTarefa = $('#input-tarefa').val()
    const listElement = $('ul')

    $(`<li>${inputTarefa}</li>`).appendTo(listElement)

    $('#input-tarefa').val("")
  })

  $(document).on("click", "li", function() {
    $(this).toggleClass('riscado')
  })

})
