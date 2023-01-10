$(document).ready(function() {

  $("#telefone").mask("(00) 00000-0000")
  $("#cpf").mask("000-000-000.00")
  $("#cep").mask("00000-000")

  $("form").validate({
    rules: {
      nome: "required",
      telefone: "required",
      cpf: "required",
      endereco: "required",
      cep: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      nome: "Por favor, insira o seu nome completo",
      email: {
        required: "Por favor, preencha seu email",
        email: "Esse formato de email não é válido"
      }
    },
    submitHandler: function(form) {
      console.log(form)
      form.submit()
    },
    invalidHandler: function() {
      console.log("Erro ao enviar formulário")
    },
    errorPlacement: function(label, element) {
      label.addClass("error-message")
      label.insertAfter(element)
    }
  })
})
