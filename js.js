let usersData = [
    {id:1, username:"amir", pass: '232323'},
    {id:2, username:"hassan", pass: 'ar1212'},
    {id:3, username:"ali", pass: 'ali2525'},
    {id:4, username:"mmd", pass: 'assseede'},
]
let promtUserName = prompt('pleas enter your username:')

let getUserName = usersData.find(function(user) {
    return user.username === promtUserName
})

if ( getUserName === undefined){
    alert('شما در سایت ثبت نام نکردید')
}else {
    alert('your password is :'+ getUserName.pass)
}


