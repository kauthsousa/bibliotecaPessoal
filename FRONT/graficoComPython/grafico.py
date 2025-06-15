import matplotlib.pyplot as plt

dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex']
valores = [10, 12, 8, 15, 13]

plt.plot(dias, marker='o')
plt.title('Valores ao longo da semana')
plt.xlabel('Dias da semana')
plt.ylabel('Valores')
plt.grid(True)

plt.show()