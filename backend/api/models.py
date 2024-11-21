from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Expense(models.Model):
    expense_item = models.CharField(max_length=100)
    purchased_date = models.DateTimeField(auto_now_add=True)
    expense_amount = models.FloatField()
    expense_category = models.CharField(max_length=100)
    expense_author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="expense")
    expense_payment_method = models.CharField(max_length=100)

    def __str__(self):
        return self.expense_item

class Income(models.Model):
    income_date = models.DateTimeField(auto_now_add=True)
    income_source = models.CharField(max_length=100)
    income_amount =  models.FloatField()
    income_author = models.ForeignKey(User,on_delete=models.CASCADE,related_name="income")
    income_payment_method = models.CharField(max_length=100)
    income_category = models.CharField(max_length=100)

    def __str__(self):
        return self.income_source
    