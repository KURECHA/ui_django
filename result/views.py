from django.shortcuts import render

# Create your views here.
def  index_template(request):
    i=0
    if i == 1:
        return render(request, 'result.html')

    if i == 0:
        return render(request, 'result_eco_and_plastic_bag.html')