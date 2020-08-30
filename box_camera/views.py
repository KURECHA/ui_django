from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def  boxcamera_template(request):
    return render(request, 'box_camera.html')
