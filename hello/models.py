from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Greeting(models.Model):
    when = models.DateTimeField("date created", auto_now_add=True)


class Rentals(models.Model):
    createdBy=models.TextField(default='patel')
    id=models.AutoField(primary_key=True)
    trend=models.CharField(max_length=200)
    title=models.CharField(max_length=200)
    rent=models.CharField(max_length=200)
    beds=models.CharField(max_length=200)
    bathrooms=models.CharField(max_length=200)
    area=models.CharField(max_length=200)
    src=models.TextField()
    address=models.TextField()
    price=models.CharField(max_length=200)
    date=models.CharField(max_length=200)
    city=models.CharField(max_length=200)
    property=models.CharField(max_length=200)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['id','date']

class Profile(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    auth_token = models.CharField(max_length=100 )
    is_verified = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.username


