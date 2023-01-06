$(document).ready(function() {

  $('li').click(function() {
    $(this).toggleClass('riscado')
  })

  $('form').on('submit', function(e) {

    e.preventDefault()

    const inputTarefa = $('#input-tarefa').val()
    const listElement = $('ul')

    $(`<li>${inputTarefa}</li>`).appendTo(listElement)

    $('#input-tarefa').val("")
  })
})
