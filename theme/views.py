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