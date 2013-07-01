Версия 0.8.15:
 * Интеграция jscs для проверки стиля.
 * Фиксы в нормализации зависимостей.

Версия 0.8.14:
 * Расширено поведение useFileList, теперь можно суффиксы задать через опцию `sourceSuffixes`.
 * Фикс препроцессинга url в CSS.

Версия 0.8.13:
 * Фикс сборки dirs.

Версия 0.8.12:
 * Фикс сборки depsByTech.

Версия 0.8.11:
 * Интеграция с travis.
 * Использован jshint.

Версия 0.8.10:
 * Конфигуратор включен в состав проекта.
 * Технология css-stylus-with-nib.
 * Технология css-less.
 * Фикс в css-stylus.

Версия 0.8.9:
 * Отдача статики через enb server.

Версия 0.8.8:
 * levelsTarget для bemdecl-test.

Версия 0.8.7:
 * Возможность задания нестандартных схем именования для уровней переопределения.
 * Фиксы в модульности.

Версия 0.8.6:
 * Поддержка модульности.
 * Возможность сконфигурировать ноду для заданного режима.

Версия 0.8.5:
 * Фикс в технологии bemdecl-from-bemjson.
 * Фикс в формировалии относительных путей.

Версия 0.8.4:
 * Фикс в технологии priv-js.

Версия 0.8.3:
 * Технологии node-js, browser-js, vanilla-js.

Версия 0.8.2:
 * Фиксы в технологии pub-js-i18n.

Версия 0.8.1:
 * Переделано логгирование. Теперь оно стало короче и понятнее.
 * Добавлена опция --graph в enb make. С ее помощью можно вывести граф сборки.
 * Порядок суффиксов, переданных в useFileList при создании технологии теперь учитывается при формировании результата.
 * Фиксы в превышении лимита открытых файлов.
 * Более понятная ошибка при синтаксической ошибке в депсах.