from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings

def models_gallery(request):
    return render(request, 'models.html')

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def missions(request):
    return render(request, 'missions.html')

def competition(request):
    return render(request, 'competition.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message_text = request.POST.get('message')
        
        print(f"📨 NEW CONTACT FORM SUBMISSION:")
        print(f"👤 Name: {name}")
        print(f"📧 Email: {email}") 
        print(f"📋 Subject: {subject}")
        print(f"📝 Message: {message_text}")
        print("---" * 20)
        
        messages.success(request, 'Your message has been sent successfully!')
        return redirect('contact')
    
    return render(request, 'contact.html')