const err = new Error('error in email');
console.log('err: ', err);

function validateEmail(email) {
    return email.match(/@/) ?
        email :
        new Error(`error occured in ${email}`);
}

const email = "doe.com";

const validatedEmail = validateEmail(email);
if(validatedEmail instanceof Error){
    console.log(`Eror, guys, ${validatedEmail.message}`);
}else{
    console.log(`Valid email ${validatedEmail}`);
}

try{
    const validatedEmail2 = validateEmail(email);
    if(validatedEmail2 instanceof Error){
        console.log(`Eror 2, guys, ${validatedEmail3.message}`);
    }else{
        console.log(`Valid email2 ${validatedEmail2}`);
    }
} catch(err){
    console.log(`catch block works ${err.message}. Stack ${err.stack}`);
}