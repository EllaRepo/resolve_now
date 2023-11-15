""" Define the data models for api app
"""
from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.dispatch import receiver


class User(AbstractUser):
    """Define custom user inherited from AbstractUser
    """
    username = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=15)
    full_name = models.CharField(max_length=255)
    is_inspector = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'phone', 'full_name']


    def profile(self):
       """Define the apropriate profile of the created user
       """
       if self.is_inspector:
           profile = InspectorProfile.objects.get(user=self)
       else:
           profile = UserProfile.objects.get(user=self)
       

class UserProfile(models.Model):
    """Define public user profile
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)

class InspectorProfile(models.Model):
    """Define inspector profile
    """
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="user_images", default="default.jpg")
    verified = models.BooleanField(default=False)
    region = models.CharField(max_length=20)
    sector = models.CharField(max_length=20)

def create_user_profile(sender, instance, created, **kwargs):
    """Function to create profile when a user is created
    """
    if created:
        if instance.is_inspector:
            InspectorProfile.objects.create(user=instance)
        else:
            UserProfile.objects.create(user=instance)

def save_user_profile(sender, instance, **kwargs):
    """Saves the created profie instance to database
    """
    if instance.is_inspector:
        instance.inspectorprofile.save()
    else:
        instance.userprofile.save()

post_save.connect(create_user_profile, sender=User)
post_save.connect(save_user_profile, sender=User)

class Region(models.Model):
    """Defines Region model
    """
    name = models.CharField(max_length=20)

class CompTypes(models.Model):
    """Defines complaint types model
    """
    name = models.CharField(max_length=20)

class Complaint(models.Model):
    """Defines complaint model
    """
    email = models.EmailField()
    username = models.CharField(max_length=100)
    status = models.CharField(max_length=20, default="Pending")
    compTitle = models.CharField(max_length=128)
    city = models.CharField(max_length=20)
    subCity = models.CharField(max_length=20)
    landmark = models.CharField(max_length=20)
    desc = models.CharField(max_length=300)
    region = models.CharField(max_length=20)
    compType = models.CharField(max_length=20)
    compSev =models.CharField(max_length=20)

    def to_dict(self):
        """Returns a dictionary containing all keys/values of the instance
        """
        new_dict = self.__dict__.copy()
        if "_state" in new_dict:
            del new_dict["_state"]
        return new_dict
