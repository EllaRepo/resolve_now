# Generated by Django 4.2.6 on 2023-11-02 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_complaint_comptypes_region'),
    ]

    operations = [
        migrations.AddField(
            model_name='complaint',
            name='email',
            field=models.EmailField(default=1234, max_length=254),
            preserve_default=False,
        ),
    ]
