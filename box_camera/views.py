from django.shortcuts import render

from .cap_box import cap_box

# Create your views here.
def  boxcamera_template(request):
    # cap_box()
    size = request.GET.get('size')
    print(size)
    return render(request, 'box_camera.html')
