from rest_framework import serializers
from .models import Rentals

class RentalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rentals
        fields=["id","createdBy","trend","title","rent","beds","bathrooms","area","src","address","price","date","city","property"]