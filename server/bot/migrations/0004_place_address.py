# Generated by Django 3.1.2 on 2020-11-04 21:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bot', '0003_place'),
    ]

    operations = [
        migrations.AddField(
            model_name='place',
            name='address',
            field=models.CharField(default=1, max_length=255),
            preserve_default=False,
        ),
    ]
