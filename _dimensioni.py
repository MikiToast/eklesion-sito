# -*- coding: utf-8 -*-
"""Scrive in scarica.html le dimensioni VERE dei file da scaricare (APK, gioco per Windows, gioco nel browser), arrotondate ai 5 MB, leggendole da game/builds.
Va lanciato a ogni rilascio, dopo le build e prima di pubblicare il sito:   python sito/_dimensioni.py"""
import os
import re
import sys

QUI = os.path.dirname(os.path.abspath(__file__))
B = os.path.join(QUI, '..', 'game', 'builds')
sys.stdout.reconfigure(encoding='utf-8')


def mb(byte: int) -> int:
    return max(5, int(round(byte / 1e6 / 5.0)) * 5)


def cartella(p: str) -> int:
    return sum(os.path.getsize(os.path.join(r, f)) for r, _, fs in os.walk(p) for f in fs)


apk = mb(os.path.getsize(os.path.join(B, 'Eklesion-ufficiale.apk')))
win = mb(os.path.getsize(os.path.join(B, 'Eklesion-Windows.zip')))
web = mb(cartella(os.path.join(B, 'web')))
p = os.path.join(QUI, 'scarica.html')
s = open(p, encoding='utf-8').read()
n = 0
for pat, val in ((r'(</b> · circa )\d+( MB · Android)', apk), (r'(il gioco \(circa )\d+( MB\) si scarica)', win), (r'(Il primo caricamento scarica circa )\d+( MB, poi)', web)):
    s, k = re.subn(pat, r'\g<1>%d\g<2>' % val, s)
    n += k
open(p, 'w', encoding='utf-8', newline='\n').write(s)
print('dimensioni: Android %d MB, Windows %d MB, browser %d MB (%d punti aggiornati)' % (apk, win, web, n))
