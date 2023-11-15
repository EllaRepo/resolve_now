"""This module defines a class for api configurations
"""
from django.apps import AppConfig


class ApiConfig(AppConfig):
    """ Class define api app configurations
    """
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'api'
