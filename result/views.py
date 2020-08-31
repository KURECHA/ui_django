from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def  index_template(request):
    present = 10
    params = {
        'value': str(present),
    }
    i=1
    if i == 1:
        return render(request, 'result.html', params)

    if i == 0:
        return render(request, 'result_eco_and_plastic_bag.html')