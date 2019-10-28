# Generated by Django 2.2.3 on 2019-08-24 21:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portalapi', '0009_auto_20190825_0321'),
    ]

    operations = [
        migrations.AddField(
            model_name='patient',
            name='consent',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='patient',
            name='telemonitoring',
            field=models.BooleanField(default=False),
        ),
    ]
