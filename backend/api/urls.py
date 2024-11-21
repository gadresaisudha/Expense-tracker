from django.urls import path
from . import views

urlpatterns = [
    path('expense/',views.ExpenseListCreate.as_view(),name='expense-list'),
    path('expense/delete/<int:pk>/',views.ExpenseDelete.as_view(),name='expense-delete'),
    path('income/',views.IncomeListCreate.as_view(),name='income-list'),
    path('income/delete/<int:pk>',views.ExpenseDelete.as_view(),name='income-delete')
]
