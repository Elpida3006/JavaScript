 // TODO

 const userAuth = firebase.auth();
 const dataBase = firebase.firestore();

 const app = Sammy('#main', function() {

     this.use('Handlebars', 'hbs');

     //get - визуализира съдържанието на страниците
     this.get('#/home', function(ctx) {
         loginUser(ctx)


         this.loadPartials({
             'header': '../templates/common/header.hbs',
             'footer': '../templates/common/footer.hbs'
         }).then(function() {
             this.partial('../templates/home/home.hbs')
         })
     });

     this.get('#/login', function(ctx) {

         this.loadPartials({
             'header': '../templates/common/header.hbs',
             'footer': '../templates/common/footer.hbs',
             'loginForm': '../templates/login/loginForm.hbs'
         }).then(function() {
             this.partial('../templates/login/loginPage.hbs')
         })
     })

     this.get('#/register', function(ctx) {

         this.loadPartials({
             'header': '../templates/common/header.hbs',
             'footer': '../templates/common/footer.hbs',
             'registerForm': '../templates/register/registerForm.hbs'
         }).then(function() {
             this.partial('../templates/register/registerPage.hbs')
         })
     })

     this.get('#/about', function(ctx) {
         loginUser(ctx)


         this.loadPartials({
             'header': '../templates/common/header.hbs',
             'footer': '../templates/common/footer.hbs',
         }).then(function() {
             this.partial('../templates/about/about.hbs')
         })
     })

     this.get('#/logout', function(ctx) {
         //  const { user, email } = ctx.params
         userAuth.signOut()
             .then(res => {
                 localStorage.removeItem('user')
                 this.redirect('#/login')
             })
             .catch(e => console.log(e))


     })


     this.get('#/catalog', function(ctx) {

         const user = localStorage.getItem('user');
         if (user) {
             const { uid, email } = JSON.parse(user)
             ctx.loggedIn = true;
             ctx.email = email;
             ctx.hasNoTeam = true;
         }

         this.loadPartials({
             'header': '../templates/common/header.hbs',
             'footer': '../templates/common/footer.hbs',
             'team': '../templates/catalog/team.hbs'
         }).then(function() {
             this.partial('../templates/catalog/teamCatalog.hbs')
         })

     });
     this.get('#/create', function(ctx) {


         const user = localStorage.getItem('user');
         if (user) {
             const { uid, email } = JSON.parse(user)
             ctx.loggedIn = true;
             ctx.email = email;
             ctx.hasNoTeam = true;
         }

         this.loadPartials({
             'header': '../templates/common/header.hbs',
             'footer': '../templates/common/footer.hbs',
             'createForm': '../templates/create/createForm.hbs'
         }).then(function() {
             this.partial('../templates/create/createPage.hbs')
         })
     });

     this.get('#/edit', function(ctx) {
         const { id } = ctx.params
         const user = localStorage.getItem('user');
         if (user) {
             const { uid, email } = JSON.parse(user)
             ctx.loggedIn = true;
             ctx.email = email;
             ctx.hasNoTeam = true;
         }

         this.loadPartials({
             'header': '../templates/common/header.hbs',
             'footer': '../templates/common/footer.hbs',
             'editForm': '../templates/edit/editForm.hbs'
         }).then(function() {
             this.partial('../templates/edit/editPage.hbs')

         })
     });



     this.post('#/catalog/:id', function(ctx) {
         const { id } = ctx.params
         const user = localStorage.getItem('user');
         if (user) {
             const { uid, email } = JSON.parse(user)
             ctx.loggedIn = true;
             ctx.email = email;
             //  ctx.hasNoTeam = true;
         }
         if (id === uid) {

         }

         this.loadPartials({
             'header': '../templates/common/header.hbs',
             'footer': '../templates/common/footer.hbs',
             'team': '../templates/catalog/team.hbs'
         }).then(function() {
             this.partial('../templates/catalog/details.hbs')
         })

     });

     //post - обработва данните от инпут полетата (формата)
     this.post('#/register', function(context) {
         //  console.log(context);

         const { email, password, repeatPassword } = context.params
         if (password !== repeatPassword) {
             const errorBox = document.getElementById('errorBox')
             errorBox.textContent = 'Please field right Re-password'
             errorBox.style.display = 'block'

             errorBox.setTimeout(() => {
                 errorBox.style.display = 'none'
             }, 2000);


         }
         userAuth.createUserWithEmailAndPassword(email, password)
             .then(createdUser => {
                 this.redirect('#/login')
             }).catch(e => console.log(e))
     })

     this.post('#/login', function(context) {
         const { email, password } = context.params;

         userAuth.signInWithEmailAndPassword(email, password)
             .then(data => {
                 const { user: { email, uid } } = data
                 localStorage.setItem('user', JSON.stringify({ email, uid }))
                 this.redirect('#/home')
             })
             .catch(e => console.log(e))




     })

     this.post('#/create', function(ctx) {
         const { name, comment, } = ctx.params
         dataBase.collection('teams')
             .add({
                 name,
                 comment
                 //  creator: getDataUser().id
             }).then((createdT) => {
                 console.log(createdT);
                 this.redirect('#/catalog')
             }).catch(console.error())

     })

 });







 (() => {
     app.run('#/home')
 })()

 function loginUser(ctx) {
     const user = localStorage.getItem('user');
     if (user) {
         const { uid, email } = JSON.parse(user)
         ctx.loggedIn = true;
         ctx.email = email;
     }
 }

 function getDataUser() {
     const user = localStorage.getItem('user')
     return user ? JSON.parse(user) : null
 }