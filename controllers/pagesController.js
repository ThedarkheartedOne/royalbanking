const getHome = (req, res) => {
    res.render('login');
};
const getLogin = (req, res) => {
    res.render('login');
};
const getRegister = (req, res) => {
    res.render('register');
};
const getDashboard = (req, res) => {
    res.render('dashboard');
}
const login = (req, res) => {
    const systemAccountNumber = '909188126';
    const systemPassword = "Leeseo1234!";
    const accountNumber = req.body.accountNumber;
    const password = req.body.password;
    if(systemAccountNumber === accountNumber){
        if(systemPassword === password) {
            res.redirect('dashboard');
        }
        else{
            res.send('password Incorrect!')
        }
    }
    else{
        res.send("Account Number does not exist");
        res.redirect('/login');
    }
} 
module.exports = {
    getHome,
    getLogin,
    getRegister,
    login,
    getDashboard
};