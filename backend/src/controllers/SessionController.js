/*index, show, store, update, destroy são os metodos do controller
//index retorna listagem de sessões
//show lista uma unica sessão
//store cria uma sessão
//update faz o update de uma sessão
destroy destrói uma sessão
*/

const User = require('../models/User');


//visto q é algo q puxa do DB, pode demorar um pouco pra fazer toda a criação no DB, então partiu Async
module.exports = {
    async store(req,res){
        const email = req.body.email;
        //ou const { email } = req.body; visto q email ta pegando o valor de email

        let user = await User.findOne({ email : email });
        //ou let user = await User.findOne({ email });
        //ele vai buscar se tem um User com o email igual ao passado
        if(!user) { //se não tiver, ele cria um novo usuario
            user = await User.create({ email });
        }

        // const user = await User.create({ email }); //aqui vai ser os valores do usuario

        return res.json(user);
    }
};