""" This module defines classes used in the admin site to manage
    different data on the database
"""
from django.contrib import admin
from api.models import User, UserProfile, InspectorProfile, Complaint, CompTypes, Region


class UserAdmin(admin.ModelAdmin):
    """Class defines display list items in user model
    """
    list_display = ['full_name','username', 'email']

class UserProfileAdmin(admin.ModelAdmin):
    """Class defines display list items in user profile
    """
    list_editable = ['verified']
    list_display = ['user', 'verified']

class InspectorProfileAdmin(admin.ModelAdmin):
    """Class defines display list items in inspector profile
    """
    list_display = ['user', 'region', 'sector']

class ComplaintAdmin(admin.ModelAdmin):
    """Class defines display list items of complaint model
    """
    list_display = ['id', 'compType']

class CompTypesAdmin(admin.ModelAdmin):
    """Class defines display list items of complaint types model
    """
    list_display = ['id', 'name']

class RegionAdmin(admin.ModelAdmin):
    """Class defines display list items of region model
    """
    list_display = ['id', 'name']

admin.site.register(User, UserAdmin)
admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(InspectorProfile, InspectorProfileAdmin)
admin.site.register(Complaint,ComplaintAdmin)
admin.site.register(CompTypes, CompTypesAdmin)
admin.site.register(Region, RegionAdmin)