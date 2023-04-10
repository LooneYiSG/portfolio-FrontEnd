function loginAdmin(){
    document.getElementById("btn-edit-profile").style.display="block"
    document.getElementById("btn-edit-about").style.display="block"
}

function loginDisplay(enable){
    enable? document.getElementById("login").style.display="block" : document.getElementById("login").style.display="none";
}

function sendLoginData(){
    let data = new Object(); 
    data.username = document.getElementById("username").value;
    data.password = document.getElementById("password").value;
    searchLoginData(data)
}


function searchLoginData(datos){
    console.log("LOAD")
    fetch("http://127.0.0.1:5500/db/accounts.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(account => {
            if(account.username == datos.username && account.password == datos.password){
                alert("Login successful")
                loginDisplay(false)
                loginAdmin()
                console.log(account)
            }
        });
    })
    console.log("DONE")
}

function editText(id,btn){
    document.getElementById(btn).style.display="none";
    id.forEach(element => {
        document.getElementById(element).style.display="block"; 
    });
}

function setText(id,value){
    document.getElementById(id).innerText = value;
    console.log(value)
}

function doneEdit(id,btn){
    document.getElementById(btn).style.display="block";
    id.forEach(element => {
        document.getElementById(element).style.display="none"; 
    });
}

function requestYT(id){
    var interval = 0; var jobid = '';
	//$(document).ready(function(){
        //$("#dlbutton").click(function(){
			//var buttonhtml = $('#dlbutton').html();		
			$.ajax({
				url: '/convert/',
				method: 'POST',
                dataType: 'json',
				beforeSend: function() {
					//$('#dlbutton').prop('disabled', true); 
					//$('#dlbutton').html('checking video <img src=loading2.gif>');
                    console.log('checking video');
				},
				data: { 
					'url': 'https://www.youtube.com/watch?v='+id, 
                    'convert': 'gogogo',
                    'token_id': 't_dcddb73cd691a0394dbc541df242c3e6f44cacb959783e38de5c4c7eaf652b4f',
                    'token_validto': '1675455000'
				},
				success: function (data) {
					try {
						json = data;
					} catch (e) {
				        console.log(json.error);//$('#dlbutton').html('error 10. could not connect to converter. retry. '+json.error);
                        return;
					}
					if (json.hasOwnProperty('success')) {
                        jobid = json.jobid;
                        interval = setInterval(function(){ 
                            var loc = '/convert/?jobid=' + jobid + '&time='+Date.now();
                            $.getJSON(loc, function(data) {
                                if (data.ready) {
                                    if (data.message) console.log(data.message);//$('#dlbutton').html(data.message);
                                    else console.log('successful');//$('#dlbutton').html("mp3 download successful<br>check downloads folder");
                                    clearInterval(interval);
                                    location.href = data.dlurl;
                                }
                                if (data.error) {
                                    //$('#dlbutton').html("(= PLEASE TRY AGAIN. =) <small>"+data.error+"</small>");
                                    clearInterval(interval);
                                }
                                if (data.retry) {
                                    //$('#dlbutton').html(data.retry);
                                }
                            });
                        }, 3000); 

                    } else {
						//$('#dlbutton').html(json.error);
					}
                    return;
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
                    //$('#dlbutton').html('error... please, try again');
                    return;
				}
                 
			});
		//});
	//});
//    function getmp3() { window.open("/button/gh/"); }
}


/*let JSONObject = new Object();
JSONObject.nombre = "nombre";
JSONObject.apellido = "apellido";
console.log(JSONObject)*/