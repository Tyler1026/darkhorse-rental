// burger menu
document.addEventListener('DOMContentLoaded',function(){
  var b=document.querySelector('.burger'),n=document.querySelector('.nav-links');
  if(b&&n){b.addEventListener('click',function(){n.classList.toggle('open');});}

  // booking form (no backend — demo: opens mail / shows message)
  var f=document.getElementById('bookingForm');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    var d=new FormData(f);
    var msg='ご予約リクエストを受け付けました。\n\n'
      +'お名前: '+(d.get('name')||'')+'\n'
      +'お受取り: '+(d.get('pickup')||'')+' '+(d.get('pickupDate')||'')+'\n'
      +'ご返却: '+(d.get('return')||'')+' '+(d.get('returnDate')||'')+'\n'
      +'車種: '+(d.get('carType')||'')+'\n\n'
      +'担当より折り返しご連絡いたします。';
    var box=document.getElementById('formResult');
    if(box){box.style.display='block';box.textContent=msg;}
    f.reset();
    window.scrollTo({top:box.offsetTop-120,behavior:'smooth'});
  });}

  // contact form
  var c=document.getElementById('contactForm');
  if(c){c.addEventListener('submit',function(e){
    e.preventDefault();
    var box=document.getElementById('contactResult');
    if(box){box.style.display='block';box.textContent='お問い合わせありがとうございます。担当より折り返しご連絡いたします。';}
    c.reset();
  });}
});