document.getElementById("generate").addEventListener("click", function() {
    let config = "";

    // Pobieranie wartości z pól formularza
    const getValue = (id) => document.getElementById(id)?.value || "";

    config += `sensitivity ${getValue("sensitivity")}\n`;
    config += `zoom_sensitivity_ratio ${getValue("zoom_sensitivity")}\n`;
    config += `volume ${getValue("volume")}\n`;
    config += `snd_mute_losefocus ${getValue("snd_mute_losefocus")}\n`;
    config += `snd_voipvolume ${getValue("snd_voipvolume")}\n`;
    config += `cl_crosshair_sniper_width ${getValue("cl_crosshair_sniper_width")}\n`;
    config += `game_sleep ${getValue("game_sleep")}\n`;
    config += `cl_teamid_overhead_always ${getValue("ally_equipment")}\n`;
    config += `cl_player_crosshair_opacity ${getValue("player_contrast")}\n`;
    config += `cl_hud_playercount_showcount ${getValue("hide_info")}\n`;
    config += `cl_show_bullet_impacts ${getValue("show_bullets")}\n`;
    config += `cl_color ${getValue("cl_color")}\n`;

    // Bindy
    let quickDropBombKey = getValue("quick_drop_bomb_key");
    if (quickDropBombKey) {
        config += `alias "+dropb" "slot3; slot5;"\n`;
        config += `alias "-dropb" "drop; playerchatwheel CW.droppedbomb #Chatwheel_droppedbomb"\n`;
        config += `bind "${quickDropBombKey}" "+dropb"\n`;
    }

    let doubleQKey = getValue("double_q_key");
    if (doubleQKey) {
        config += `alias "+knife" "slot3"\n`;
        config += `alias "-knife" "lastinv"\n`;
        config += `bind "${doubleQKey}" "+knife"\n`;
    }

    let jumpthrowKey = getValue("jumpthrow_key");
    if (jumpthrowKey) {
        config += `alias +muteh "unbind ${jumpthrowKey}"\n`;
        config += `alias -muteh "bind ${jumpthrowKey} +jumpthrow"\n`;
        config += `alias revert "bind mouse_x yaw"\n`;
        config += `alias combo "-jump;revert;-muteh"\n`;
        config += `alias +jumpthrow "+jump"\n`;
        config += `alias -jumpthrow "-attack;+muteh;bind mouse_x combo"\n`;
        config += `bind "${jumpthrowKey}" +jumpthrow\n`;
    }

    let fpsTab = getValue("fps_tab");
    if (fpsTab === "1") {
        config += `alias "+teleON" "+showscores; cl_hud_telemetry_frametime_show 2; cl_hud_telemetry_ping_show 2; cl_hud_telemetry_net_misdelivery_show 2; cl_hud_telemetry_serverrecvmargin_graph_show 2;"\n`;
        config += `alias "-teleON" "-showscores; cl_hud_telemetry_frametime_show 1; cl_hud_telemetry_ping_show 1; cl_hud_telemetry_net_misdelivery_show 1; cl_hud_telemetry_serverrecvmargin_graph_show 1;"\n`;
        config += `bind "TAB" "+teleON"\n`;
    }

    config += "host_writeconfig\n";
    console.log("Dodano host_writeconfig.");

    // Tworzenie pliku autoexec.cfg
    let blob = new Blob([config], { type: "text/plain" });
    let url = URL.createObjectURL(blob);
    let downloadLink = document.getElementById("download-link");
    downloadLink.href = url;
    downloadLink.download = "autoexec.cfg";

    document.getElementById("download-section").style.display = "block";
});
