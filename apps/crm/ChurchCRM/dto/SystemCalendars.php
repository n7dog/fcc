<?php

namespace ChurchCRM\dto;

use ChurchCRM\Interfaces\SystemCalendar;
use ChurchCRM\model\ChurchCRM\Calendar;
use ChurchCRM\SystemCalendars\AnniversariesCalendar;
use ChurchCRM\SystemCalendars\BirthdaysCalendar;
use ChurchCRM\SystemCalendars\HolidayCalendar;
use ChurchCRM\SystemCalendars\UnpinnedEvents;
use Propel\Runtime\Collection\ObjectCollection;

class SystemCalendars
{
    private static function getCalendars()
    {
        $systemCalendarNames = [
            BirthdaysCalendar::class,
            AnniversariesCalendar::class,
            HolidayCalendar::class,
            UnpinnedEvents::class,
        ];

        $calendars = [];
        foreach ($systemCalendarNames as $systemCalendarName) {
            if ($systemCalendarName::isAvailable()) {
                array_push($calendars, new $systemCalendarName());
            }
        }

        return $calendars;
    }

    public static function getCalendarList()
    {
        $calendars = new ObjectCollection();
        $calendars->setModel(Calendar::class);
        foreach (self::getCalendars() as $calendar) {
            $calendars->push(self::toPropelCalendar($calendar));
        }

        return $calendars;
    }

    public static function getCalendarById($id)
    {
        $requestedCalendar = null;
        foreach (self::getCalendars() as $calendar) {
            if ($calendar->getId() == $id) {
                $requestedCalendar = $calendar;
                break;
            }
        }

        return $requestedCalendar;
    }

    public static function toPropelCalendar(SystemCalendar $calendar)
    {
        $procalendar = new Calendar();
        $procalendar->setId($calendar->getId());
        $procalendar->setName($calendar->getName());
        $procalendar->setAccessToken($calendar->getAccessToken());
        $procalendar->setBackgroundColor($calendar->getBackgroundColor());
        $procalendar->setForegroundColor($calendar->getForegroundColor());

        return $procalendar;
    }
}
