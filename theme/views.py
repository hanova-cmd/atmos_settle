from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def missions(request):
    return render(request, 'missions.html')

def competition(request):
    return render(request, 'competition.html')

def contact(request):
    return render(request, 'contact.html')

from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.mail import send_mail
from django.conf import settings
from .models import ContactMessage

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        message_text = request.POST.get('message')
        
        contact_message = ContactMessage.objects.create(
            name=name,
            email=email,
            subject=subject,
            message=message_text
        )
        
        try:
            send_mail(
                f'New message from {name}: {subject}',
                f'From: {name} ({email})\n\n{message_text}',
                settings.DEFAULT_FROM_EMAIL,
                ['your-email@gmail.com'], 
                fail_silently=True,
            )
        except:
            pass 
        
        messages.success(request, 'Your message has been sent successfully!')
        return redirect('contact')
    
    return render(request, 'contact.html')