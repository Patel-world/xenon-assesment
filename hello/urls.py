from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import RentalListView

urlpatterns = [
    path('rentals/', RentalListView.as_view(),name='rentals'),
    
    
]

urlpatterns = format_suffix_patterns(urlpatterns)