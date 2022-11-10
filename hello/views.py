from django.shortcuts import render
from django.http import HttpResponse

from .models import Greeting,Rentals
from .serializer import RentalSerializer
from django.shortcuts import get_object_or_404

from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from rest_framework import generics
from rest_framework import status
import json

from django.contrib.auth.views import LoginView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.urls import reverse_lazy

# Create your views here.
def index(request):
    # return HttpResponse('Hello from Python!')
    return render(request, "index.html")






class RentalListView(APIView):
    def get(self, request):
        todo=Rentals.objects.all()
        serializer = RentalSerializer(todo,many=True)
        return Response(serializer.data)

    def post(self, request):
        a=request.data
        
        d={
        "id": 21,
        "createdBy": f"{a['createdBy']}",
        "trend": f"{a['trend']}",
        "title": f"{a['title']}",
        "rent": f"{a['rent']}",
        "beds": f"{a['beds']}",
        "bathrooms": f"{a['bathrooms']}",
        "area": f"{a['area']}",
        "src": f"{a['src']}",
        "address": f"{a['address']}",
        "price": f"{a['price']}",
        "date": f"{a['date']}",
        "city": f"{a['city']}",
        "property": f"{a['property']}"
    }
        print(d)
        serializer = RentalSerializer(data=d)
        
        print(serializer.is_valid())
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_200_OK)

