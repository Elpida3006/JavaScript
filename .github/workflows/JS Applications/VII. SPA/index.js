// console.log(123)
const UserModel = firebase.auth();
const db = firebase.firestore();


const app = Sammy('#root', function() {

    this.use('Handlebars', 'hbs');

    this.get('#/home', function(hbsViewOBJECT) {

        db.collection('offers')
            .get()
            .then((res) => {
                // console.log(res);
                // console.log(hbsViewOBJECT);
                // hbsViewOBJECT.offers = []

                // res.forEach(offer => {
                //     hbsViewOBJECT.offers.push({ id: offer.id, ...offer.data() })
                // });
                hbsViewOBJECT.offers = res.docs.map((offer) => { return { id: offer.id, ...offer.data() } })
                    //docs - obhojdame bazata, taka ni vadi id-to i vsichki propyrtita koito sme sazdali v bazata s tova ( data)

                add_Header_Footer(hbsViewOBJECT)
                    .then(function() {
                        this.partial('./templates/home.hbs');
                    })

            }).catch(e => console.e)
    });


    this.get('#/register', function(hbsView) {
        add_Header_Footer(hbsView)
            .then(function() {
                this.partial('./templates/register.hbs')
            })

    });

    this.get('#/login', function(hbsView) {
        add_Header_Footer(hbsView)
            .then(function() {
                this.partial('./templates/login.hbs')
            });

    });

    this.get('#/logout', function(hbsView) {
        UserModel.signOut()
            .then((res) => {
                clearUserData();
                this.redirect('#/register')
            }).catch((error) => console.log(error))
    });

    this.get('#/createOffer', function(hbsView) {
        add_Header_Footer(hbsView)
            .then(function() {
                this.partial('./templates/createOffer.hbs')
            });

    });


    this.get('#/details/:id', function(hbsView) {
        const { id } = hbsView.params
            // console.log(hbsView);
        db.collection('offers')
            .doc(id)
            .get()
            .then(res => {
                const offerData = res.data()
                const { uid } = getDataUser()
                const isCreator = offerData.creator === uid ? true : false
                    // const userIndex = offerData.clients.indexOf(uid);
                    // const inBasket = userIndex > -1

                // hbsView.offer = {...res.data(), isCreator, id: id, inBasket }
                hbsView.offer = {...res.data(), isCreator, id: id }
                add_Header_Footer(hbsView)
                    .then(function() {
                        this.partial('./templates/details.hbs')
                    });
            })


    });

    this.get('#/delete/:id', function(context) {
        const { id } = context.params
            // console.log(id);
        db.collection('offers')
            .doc(id)
            .delete()
            .then(() => this.redirect('#/home'))
            .catch(e => console.log(e));
    });


    this.get('/edit/:id', function(context) {
        const { id } = context.params

        db.collection('offers')
            .doc(id)
            .get()
            .then((res) => {
                context.offer = { id: id, ...res.data() };
                add_Header_Footer(context)
                    .then(function() {
                        this.partial('./templates/editOffer.hbs')
                    })
                    // console.log(res.data());
            })
    });


    this.post('#/register', function(hbsView) {
        console.log(hbsView);

        const { email, password, repassword } = hbsView.params
        if (password !== repassword) {
            return;
        }
        UserModel.createUserWithEmailAndPassword(email, password)
            .then((userData) => {
                this.redirect('#/login')
            }).catch((error) => console.log(error))
    });

    this.post('#/login', function(browserRes) {
        console.log(browserRes);
        const { email, password } = browserRes.params
        UserModel.signInWithEmailAndPassword(email, password)
            .then((userData) => {
                saveUserData(userData)
                console.log(userData);
                this.redirect('#/home')
            }).catch((error) => console.log(error))

    });


    this.post('#/createOffer', function(hbsView) {
        const { model, price, imageUrl, description, brand } = hbsView.params
            // console.log(hbsView.params);
        db.collection('offers').add({
            model,
            price,
            imageUrl,
            description,
            brand,
            creator: getDataUser().uid
        }).then((createdPr) => {
            console.log(createdPr);
            this.redirect('#/home')
        }).catch(console.error())
    });


    this.post('#/edit/:id', function(context) {
        const { id, model, imageUrl, description, price } = context.params
        db.collection('offers')
            .doc(id)
            .get()
            .then((res) => {
                // console.log(res.data());
                return db.collection('offers')
                    .doc(id)
                    .update({...res.data() }, { model, imageUrl, description, price })
            })
            .then((res) => {
                // console.log(creator);
                this.redirect(`#/details/${id}`)

            })
            .catch(e => console.log(e))
    });


    this.get('#/buy/:id', function(context) {
        const { id } = context.params;
        const { uid } = getDataUser()
            // console.log(context.params.id);
            // console.log(getDataUser().uid);

        db.collection('offers')
            .doc(id)
            .get()
            .then(res => {
                // console.log(res);
                const data = {...res.data() }
                data.clients.push(uid);

                return db.collection('offers')
                    .doc(id)
                    .set(id)
                    .then(() => {
                        this.redirect(`#details/${id}`)
                    })
                    .catch(e => console.log(e))
            })
    });
});


(() => {
    app.run('#/home');
})()

function add_Header_Footer(context) {
    const user = getDataUser();

    context.isLoggedIn = Boolean(user);
    context.email = user ? user.email : '';

    return context.loadPartials({
        'header': './partials/header.hbs',
        'footer': './partials/footer.hbs',
    });
}

function saveUserData(data) {
    const { user: { email, uid } } = data
    localStorage.setItem('user', JSON.stringify({ email, uid }))
}

function getDataUser() {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
}

function clearUserData() {
    console.log(localStorage);
    localStorage.removeItem('user')
}