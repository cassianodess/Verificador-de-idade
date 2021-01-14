function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("nasc")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO!] Verifique os dados e tente novamente!")

    } else {
        var fsex = document.getElementsByName
            ("radsex")

        var idade = ano - Number(fano.value)

        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = "Homem"

            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute("src", "img/crianca-menino.png")

            } else if (idade >= 12 && idade < 30) {
                //Jovem
                img.setAttribute("src", "img/jovem-homem.png")
            } else if (idade >= 30 && idade < 60) {
                //adulto
                img.setAttribute("src", "img/adulto.homem.png")

            } else {
                //idoso
                img.setAttribute("src", "img/old-man.png")
            }





        } else {
            gênero = "Mulher"

            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute("src", "img/crianca-menina.png")

            } else if (idade >= 12 && idade < 30) {
                //Jovem
                img.setAttribute("src", "img/jovem-mulher.png")

            } else if (idade >= 30 && idade < 60) {
                //adulta
                img.setAttribute("src", "img/adulta-mulher.png")

            } else {
                //idosa

                img.setAttribute("src", "img/old-woman.png")
            }

        }

        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }


}
