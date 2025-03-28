# Generated by Django 5.1 on 2025-03-07 20:15

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_expenses_expense'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='expense',
            name='expense_category',
            field=models.CharField(max_length=100),
        ),
        migrations.CreateModel(
            name='Creditcard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('last_four_digits', models.CharField(max_length=4)),
                ('bank_name', models.CharField(blank=True, max_length=100, null=True)),
                ('credit_limit', models.DecimalField(decimal_places=2, max_digits=10)),
                ('available_balance', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('due_date', models.DateField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
