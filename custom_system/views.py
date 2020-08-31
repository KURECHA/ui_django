from django.shortcuts import render
from django.http import HttpResponse
# from .yolov5.cap_box import cap_box

# Create your views here.


# Create your views here.
def custom_template(request):
    # cap_box.cap_box()
    size = request.GET.get('size')
    print(size)
    return render(request, 'custom_size.html')
