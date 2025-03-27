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

class Creditcard(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    last_four_digits = models.CharField(max_length=4)
    bank_name = models.CharField(max_length=100, blank=True, null=True)
    credit_limit = models.DecimalField(max_digits=10, decimal_places=2)
    available_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    due_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.last_four_digits})"
