#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Wed Jul 11 14:47:50 2018

@author: oem
"""

from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report, confusion_matrix

from sklearn import datasets
iris=datasets.load_iris()
iris_data=iris.data
iris_labels=iris.target
print(iris_data)
print(iris_labels)
x_train,x_test,y_train,y_test=train_test_split(iris_data,iris_labels,)

classifier=KNeighborsClassifier(n_neighbors=3)
classifier.fit(x_train,y_train)
y_pred=classifier.predict(x_test)
print("Confusion matrix is as follows")
print(confusion_matrix(y_test,y_pred))
print("Accuracy Metrics")
print(classification_report(y_test,y_pred))
                                                                                                     